import { createClient } from "../../../../lib/supabase/server"

export async function POST(req: Request) {
  const supabase = await createClient()

  const { key, npcId } = await req.json()
  const id = Number(npcId)

  const { data: existing } = await supabase
    .from("Audio")
    .select("*")
    .eq("npcId", id)
    .maybeSingle()

  let result

  if (existing) {
    const { data, error } = await supabase
      .from("Audio")
      .update({
        key,
        status: "processing",
      })
      .eq("npcId", id)
      .select()
      .single()

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }

    result = data
  } else {
    const { data, error } = await supabase
      .from("Audio")
      .insert({
        id: crypto.randomUUID(),
        key,
        npcId: id,
        status: "processing",
      })
      .select()
      .single()

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }

    result = data
  }

  return Response.json({ success: true, audio: result })
}