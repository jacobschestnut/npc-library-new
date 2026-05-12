import { createClient } from "../../../lib/supabase/server"

export async function GET() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  const { data: npcs, error: dbError } = await supabase
    .from("NonPlayableCharacter")
    .select("*")
    .eq("userId", user.id)

  if (dbError) {
    return Response.json(
      {
        error: "Failed to fetch NPCs",
        detail: dbError.message,
      },
      { status: 500 }
    )
  }

  return Response.json(npcs)
}

export async function POST(req: Request) {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  const body = await req.json()

  const { data: npc, error: dbError } = await supabase
    .from("NonPlayableCharacter")
    .insert({
      name: body.name,
      desc: body.desc,
      userId: user.id,
    })
    .select()
    .single()

  if (dbError) {
    return Response.json(
      {
        error: "Failed to create NPC",
        detail: dbError.message,
      },
      { status: 500 }
    )
  }

  return Response.json(npc)
}