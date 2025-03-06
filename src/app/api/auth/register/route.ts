"use server";
import { RegisterSchema } from "@/features/auth/model/auth-schema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "../../../../../backend/prisma/prisma-client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationFailed = RegisterSchema.safeParse(body);

    if (!validationFailed.success) {
      return NextResponse.json({ message: "Invalid fields" });
    }

    const { email, firstName, password } = validationFailed.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({
        message: "User already exists!",
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

    return NextResponse.json({
      success: "Successful registration",
      user: newUser,
    });
  } catch (error) {
    return NextResponse.json({ error: "Внутренняя ошибка сервера 🤖" });
  }
}
