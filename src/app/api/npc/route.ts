import { prisma } from '@/src/lib/prisma'

export async function GET() {
  try {
    const npcs = await prisma.nonPlayableCharacter.findMany();

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
  const body = await req.json();

  const npc = await prisma.nonPlayableCharacter.create({
    data: {
      name: body.name,
      desc: body.desc,
      userId: body.userId
    },
  });

  return Response.json(npc);
}