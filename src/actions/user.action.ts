'use server';

import { SaveUserActionProps } from '~/lib/interfaces';
import { prisma } from '~/lib/prisma';
import { SaveUserActionType } from '~/lib/types';

export async function saveUserAction({
  id,
  imageUrl,
  name,
  username,
  email,
  bio,
  isCompleted,
  password = '',
}: SaveUserActionProps): Promise<SaveUserActionType> {
  try {
    if (!id) throw new Error('id required');
    if (!name) throw new Error('name required');

    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    console.log('existing user', existingUser);

    if (existingUser) {
      return await prisma.user.update({
        where: { id },
        data: {
          name,
          bio,
          isCompleted,
        },
      });
    }

    if (!username) throw new Error('username required');
    if (!email) throw new Error('email required');

    return await prisma.user.create({
      data: {
        id,
        imageUrl,
        name,
        username,
        email,
        bio,
        isCompleted,
        password,
      },
    });
  } catch (error) {
    console.log('[ERROR_SAVE_USER_ACTION]', error);
  }
}
