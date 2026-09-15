import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();

  const { email, password } = body;

  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  if (!user) {
    return Response.json({
      success: false,
      message: "Email tidak ditemukan"
    });
  }

  if (user.password_hash !== password) {
    return Response.json({
      success: false,
      message: "Password salah"
    });
  }

  return Response.json({
    success: true,
    user: {
      id: user.id,
      nama: user.name
    }
  });
}
