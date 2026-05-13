import { createClient } from "../../../lib/supabase/server"
export async function GET() {
  try {
    const supabase = await createClient()

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return Response.json(
        { error: "Unauthorized", authError },
        { status: 401 }
      )
    }

    const { data, error: dbError } = await supabase
      .from("NonPlayableCharacter")
      .select("*")
      .eq("userId", user.id)

    if (dbError) {
      console.log("DB ERROR:", dbError)
      return Response.json(
        { error: "DB failed", detail: dbError },
        { status: 500 }
      )
    }

    return Response.json(data)
  } catch (err) {
    console.log("UNEXPECTED ERROR:", err)

    return Response.json(
      { error: "Unexpected error", detail: String(err) },
      { status: 500 }
    )
  }
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