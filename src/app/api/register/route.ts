import { hash } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/lib/prisma';
import { generateRandomId } from '~/lib/utils';

export async function POST(req: Request) {
  const randomId = generateRandomId(30);
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };

    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        id: randomId,
        username: name,
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
