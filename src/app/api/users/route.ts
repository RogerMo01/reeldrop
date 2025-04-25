import { NextResponse } from "next/server";
import { AppDataSource } from "@/data/data-source";
import { User } from "@/data/entities/user.entity";
import bcrypt from "bcrypt";
import { z } from "zod";
import { QueryFailedError } from "typeorm";
import { PostgresError } from "pg-error-enum";
import { StatusCodes } from "http-status-codes";

// Validation schema
const UserSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = UserSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    const { username, email, password } = validation.data;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = hashedPassword;

    await AppDataSource.manager.save(user);

    return NextResponse.json(
      { id: user.id, username },
      { status: StatusCodes.CREATED }
    );
  } catch (error: unknown) {
    if (error instanceof QueryFailedError && error.driverError) {
      const dbError = error.driverError as { code: string; message: string };

      if (dbError.code === PostgresError.UNIQUE_VIOLATION) {
        return NextResponse.json(
          { error: "Username or Email already exist" },
          { status: StatusCodes.CONFLICT }
        );
      }
    }

    // Uncaught error type
    console.error("Unexpected error:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
