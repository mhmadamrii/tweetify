'use client';

import React, { Suspense } from 'react';
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
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

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

function Login() {
  const store = useStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  console.log('callback', callbackUrl);
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
      const res = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data?.password,
        callbackUrl,
      });
      console.log(res);

      if (!res?.error) {
        // router.push(callbackUrl);
        router.push('/homepage');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error?.toString(),
      });
      console.log('error', error);
    } finally {
      store.setRequestLoading(false);
    }
  }

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

export default function WrappedLogin() {
  return (
    <Suspense fallback={'retreiving data...'}>
      <Login />
    </Suspense>
  );
}
