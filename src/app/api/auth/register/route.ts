export const runtime = "nodejs";

import { RegisterSchema } from "@/features/auth/model/auth-schema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "../../../../../backend/prisma/prisma-client";
import { AuthError } from "next-auth";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validationFailed = RegisterSchema.safeParse(body);

  if (!validationFailed.success) {
    return NextResponse.json({ error: "Invalid fields" });
  }

  const { email, firstName, password } = validationFailed.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({
      error: "User already exists!",
    });
  }

  const hashedPasswordUser = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      password: hashedPasswordUser,
    },
  });

  try {
    return NextResponse.json({
      success: true,
      message: "Successful registration",
      user: newUser,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return NextResponse.json({ error: "Неверные учетные данные!" });
        default:
          return NextResponse.json({ error: "Неизвестная ошибка 😢" });
      }
    }
    throw error;
  }
}
