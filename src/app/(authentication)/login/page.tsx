'use client';

import React from 'react';
import Link from 'next/link';
import useStore from '~/store';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Input } from '~/components/ui/input';
import { apiLoginUser } from '~/actions/auth.action';
import { z } from 'zod';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { useToast } from '~/components/ui/use-toast';
import { LoadingSpinner } from '../_components';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';

const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function Login() {
  const store = useStore();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    store.setRequestLoading(true);
    try {
      const user = await apiLoginUser(JSON.stringify(data));
      console.log('should be user', user);
    } catch (error) {
      toast({
        title: 'Error',
        description: error?.toString(),
      });
      console.log('error', error);
    } finally {
      store.setRequestLoading(false);
      router.push('/homepage');
    }
  }

  const environment = process.env.NODE_ENV;
  const SERVER_ENDPOINT =
    environment === 'development'
      ? 'http://localhost:3000'
      : 'https://scintillating-salmiakki-ec4e99.netlify.app/';
  // : 'https://project-21-tweetify.vercel.app';

  console.log('process env', process.env.NODE_ENV);
  console.log('server endpoint', SERVER_ENDPOINT);

  return (
    <section className="flex w-full flex-col items-center justify-center md:w-[500px]">
      <h1 className="text-2xl font-bold">Login</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="disabled:bg-slate-100"
                    disabled={store.requestLoading}
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="disabled:bg-slate-100"
                    disabled={store.requestLoading}
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your email address for the account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className={cn('w-full', {
              'border border-black bg-white': store.requestLoading,
            })}
            type="submit"
          >
            {store.requestLoading ? <LoadingSpinner /> : 'Submit'}
          </Button>
        </form>
      </Form>
      <Link className="mt-5 text-sm underline" href="#">
        Forgot password?
      </Link>
      <div className="text-sm">
        Don't have an account?
        <Link className="ml-1 underline" href="/register">
          Sign up
        </Link>
      </div>
    </section>
  );
}
