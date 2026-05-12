import { createClient } from "../../../../../lib/supabase/server"
import { GetObjectCommand } from "@aws-sdk/client-s3"
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