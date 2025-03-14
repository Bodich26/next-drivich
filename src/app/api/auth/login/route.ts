"use server";

import { LoginSchema } from "@/features/auth/model/auth-schema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "../../../../../backend/prisma/prisma-client";
import { AuthError } from "next-auth";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validationFailed = LoginSchema.safeParse(body);

  if (!validationFailed.success) {
    return NextResponse.json({ message: "Invalid fields" });
  }

  const { email, password } = validationFailed.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    return NextResponse.json({
      error: "This user does not exist!",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: "Password Wrong!" });
  }

  try {
    return NextResponse.json({
      success: true,
      message: "Login is Successful",
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
