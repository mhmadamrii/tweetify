'use server';

import { prisma } from '~/lib/prisma';
import { revalidatePath } from 'next/cache';

export const createTweetAction = async ({
  text,
  userId,
  imageUrl,
}: {
  text: string;
  userId: string;
  imageUrl?: string | undefined;
}) => {
  try {
    return await prisma.tweet.create({
      data: {
        text,
        userId,
        imageUrl,
      },
    });
  } catch (error) {
    console.log('error', error);
  } finally {
    revalidatePath('/homepage');
  }
};

export const getTweetsAction = async ({
  userId,
}: {
  userId: string;
}) => {
  try {
    const data = await prisma.tweet.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTweetsAction = async () => {
  try {
    const data = await prisma.tweet.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            bannerUrl: true,
            imageUrl: true,
            name: true,
            bio: true,
            isCompleted: true,
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
