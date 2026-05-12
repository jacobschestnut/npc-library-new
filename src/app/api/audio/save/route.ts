import { createClient } from "../../../../lib/supabase/server"

export async function POST(req: Request) {
  const supabase = await createClient()

  const { key, npcId } = await req.json()
  const id = Number(npcId)

  console.log("Saving audio for npcId:", id)

  const { data: existing, error: fetchError } = await supabase
    .from("Audio")
    .select("*")
    .eq("npcId", id)
    .maybeSingle()

  if (fetchError) {
    console.log("FETCH ERROR:", fetchError)
    return Response.json(
      { success: false, error: fetchError },
      { status: 500 }
    )
  }

  console.log("Existing audio:", existing)

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
      console.log("UPDATE ERROR:", error)
      return Response.json(
        { success: false, error },
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
      console.log("INSERT ERROR:", error)
      return Response.json(
        { success: false, error },
        { status: 500 }
      )
    }

    result = data
  }

  return Response.json({ success: true, audio: result })
}