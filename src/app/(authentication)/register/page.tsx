'use client';

import Link from 'next/link';
import useStore from '~/store';

import { useRouter } from 'next/navigation';
import { Input } from '~/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { cn } from '~/lib/utils';
import { z } from 'zod';
import { handleApiError } from '~/lib/helpers';
import { apiRegisterUser } from '~/actions/auth.action';
import { LoadingSpinner } from '../_components';

import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  passwordConfirm: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function Register() {
  const store = useStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    store.setRequestLoading(true);
    try {
      const user = await apiRegisterUser(JSON.stringify(data));
      store.setAuthUser(user);
      return router.push('/login');
    } catch (error: any) {
      if (error instanceof Error) {
        handleApiError(error);
      } else {
        console.log('Error message:', error.message);
      }
    } finally {
      store.setRequestLoading(false);
    }
  }

  return (
    <section className="flex w-full flex-col items-center justify-start md:w-[500px]">
      <h1 className="text-2xl font-bold">Register</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    disabled={store.requestLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@mail.com"
                    disabled={store.requestLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john"
                    disabled={store.requestLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>confirm password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john"
                    disabled={store.requestLoading}
                    {...field}
                  />
                </FormControl>
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
        Already have an account?
        <Link className="ml-1 underline" href="/login">
          Login
        </Link>
      </div>
    </section>
  );
}
