import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomId(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let randomId = '';
  for (let i = 0; i < length; i++) {
    randomId += characters.charAt(
      Math.floor(Math.random() * charactersLength),
    );
  }
  return randomId;
}

export const timeout = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
