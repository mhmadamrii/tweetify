'use client';

import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';
import { CardContent, Card } from '~/components/ui/card';
import { z } from 'zod';
import { tweetSchema } from '~/lib/validations/tweet.schema';
import { createTweetAction } from '~/actions/tweet.action';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';

export default function CreateTweet() {
  const form = useForm<z.infer<typeof tweetSchema>>({
    resolver: zodResolver(tweetSchema),
    defaultValues: {
      userId: 'x0aiyAND',
      text: '',
      imageUrl: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof tweetSchema>) => {
    console.log('values', values);
    try {
      await createTweetAction(values);
    } catch (error) {
      console.log(error);
    } finally {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full">
          <CardContent className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tweet</FormLabel>
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
            <div className="flex items-center space-x-2">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Your followers can reply, Retweet, or like
              </div>
              <div className="ml-auto flex items-center space-x-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <TwitterIcon className="h-4 w-4 text-gray-500 transition-transform group-hover:scale-95 dark:text-gray-400" />
                </div>
                <Button size="sm">Tweet</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
