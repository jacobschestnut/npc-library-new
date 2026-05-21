import { createClient } from "../../../../../lib/supabase/server"
import { GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { s3 } from "../../../../../lib/s3"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const supabase = await createClient()

  const npcId = Number(id)

  const { data: npc, error } = await supabase
    .from("NonPlayableCharacter")
    .select(`
      id,
      audio:Audio(key)
    `)
    .eq("id", npcId)
    .maybeSingle()

  if (error || !npc) {
    return Response.json({ url: null })
  }

  const audio = Array.isArray(npc.audio)
    ? npc.audio[0]
    : npc.audio

  if (!audio?.key) {
    return Response.json({ url: null })
  }

  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET!,
    Key: audio.key,
  })

  const url = await getSignedUrl(s3, command, {
    expiresIn: 3600,
  })

  return Response.json({ url })
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const supabase = await createClient()

  const npcId = Number(id)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  const { data: npc, error } = await supabase
    .from("NonPlayableCharacter")
    .select(`
      id,
      userId,
      audio:Audio(id, key)
    `)
    .eq("id", npcId)
    .single()

  if (error || !npc) {
    return Response.json(
      { error: "NPC not found" },
      { status: 404 }
    )
  }

  if (npc.userId !== user.id) {
    return Response.json(
      { error: "Forbidden" },
      { status: 403 }
    )
  }

  const audioRows = Array.isArray(npc.audio)
    ? npc.audio
    : npc.audio
      ? [npc.audio]
      : []

  try {
    await Promise.all(
      audioRows.map((audio) =>
        s3.send(
          new DeleteObjectCommand({
            Bucket: process.env.S3_BUCKET!,
            Key: audio.key,
          })
        )
      )
    )
  } catch (err) {
    console.error("S3 DELETE ERROR:", err)
  }

  const { error: deleteError } = await supabase
    .from("NonPlayableCharacter")
    .delete()
    .eq("id", npcId)

  if (deleteError) {
    console.error("DELETE ERROR:", deleteError)

    return Response.json(
      { error: deleteError.message, detail: deleteError },
      { status: 500 }
    )
  }

  return Response.json({ success: true })
}