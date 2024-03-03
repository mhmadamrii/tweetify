'use server';

import { prisma } from '~/lib/prisma';

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
    console.log('data tweet', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
