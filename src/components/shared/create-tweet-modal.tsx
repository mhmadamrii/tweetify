'use client';

import useStore from '~/store';
import Image from 'next/image';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTweetAction } from '~/actions/tweet.action';
import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';
import { useState } from 'react';
import { UploadButton } from '~/lib/uploadthing';

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

  const [uploadedImage, setUploadedImage] = useState('');

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

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const rebuildBody = {
        ...data,
        userId: store.authUser?.id!,
        imageUrl: uploadedImage,
      };
      await createTweetAction(rebuildBody);
    } catch (error) {
      console.log('[ERROR_POST_TWEET]', error);
    }
  };

  return (
    <Dialog defaultOpen>
      <DialogContent className="flex h-1/2 flex-col justify-start sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-4 space-y-6"
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
              <div className="flex h-full w-full items-center justify-center border">
                {uploadedImage !== '' ? (
                  <Image
                    src={uploadedImage}
                    alt="preview image"
                    width={100}
                    height={100}
                  />
                ) : (
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      setUploadedImage(res[0].url);
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                )}
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => router.push('/homepage')}
                  type="button"
                >
                  Back
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
