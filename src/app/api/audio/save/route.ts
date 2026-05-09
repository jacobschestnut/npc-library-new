import { prisma } from "../../../../lib/prisma";

export async function POST(req: Request) {
  const { key, npcId } = await req.json();

  const audio = await prisma.audio.upsert({
    where: {
      npcId: Number(npcId),
    },
    update: {
      key,
      status: "processing",
    },
    create: {
      id: crypto.randomUUID(),
      key,
      npcId: Number(npcId),
    },
  });

  return Response.json({ success: true, audio });
}