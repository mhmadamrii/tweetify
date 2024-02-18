'use client';

import Link from 'next/link';
import useStore from '~/store';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Input } from '~/components/ui/input';
import { apiLoginUser } from '~/actions/auth.action';
import { z } from 'zod';

import { Button } from '~/components/ui/button';
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
      await apiLoginUser(JSON.stringify(data));
    } catch (error) {
      console.log('error', error);
    } finally {
      store.setRequestLoading(false);
      router.push('/');
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
                  <Input placeholder="shadcn" {...field} />
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
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
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
