"use server";
import { LoginSchema } from "@/features/auth/model/auth-schema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "../../../../../backend/prisma/prisma-client";

export async function POST(req: NextRequest) {
  try {
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
        message: "This user does not exist!",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json({
        message: "Invalid password",
      });
    }

    const hashedPasswordUser = await bcrypt.hash(password, 10);

    return NextResponse.json({
      success: "Login is Successful",
    });
  } catch (error) {
    return NextResponse.json({ error: "Внутренняя ошибка сервера 🤖" });
  }
}
