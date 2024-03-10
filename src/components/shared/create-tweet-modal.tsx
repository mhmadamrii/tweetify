'use client';

import useStore from '~/store';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTweetAction } from '~/actions/tweet.action';
import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '~/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog';
import { InputWithoutRing } from '../ui/input-without-ring';

export default function CreateTweet() {
  const router = useRouter();
  const store = useStore();

  console.log(store.authUser);

  const FormSchema = z.object({
    text: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log('data', data);
  };

  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-1/2 flex-col gap-4 space-y-6"
            >
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputWithoutRing
                        placeholder="what's happening"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-3">
                <Button onClick={() => router.back()}>Back</Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
