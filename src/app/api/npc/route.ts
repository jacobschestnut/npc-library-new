import { prisma } from "../../../lib/prisma";
import { createClient } from "../../../lib/supabase/server";

export async function GET() {
  const supabase = await createClient();

  console.log("ALL ENV DB:", {
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
  })

  const result = await prisma.$queryRaw`SELECT 1 as ok`
  console.log("TEST", result)

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log("USER:", user);

  if (error || !user) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const npcs = await prisma.nonPlayableCharacter.findMany({
      where: {
        userId: user.id,
      },
    });

    return Response.json(npcs);
  } catch (err) {
    console.error("PRISMA ERROR:", err);

    return Response.json(
      {
        error: "Failed to fetch NPCs",
        detail: String(err),
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const npc = await prisma.nonPlayableCharacter.create({
    data: {
      name: body.name,
      desc: body.desc,
      userId: user.id,
    },
  });

  return Response.json(npc);
}