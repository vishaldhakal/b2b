import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, CardContent } from "../../@/components/ui/card";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import { Avatar, AvatarFallback } from "../../@/components/ui/avatar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../@/components/ui/form";
import { CreatePostForm, createPostFormSchema } from "./types";

export const CreatePost: React.FC = () => {
  const form = useForm({
    resolver: yupResolver(createPostFormSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data: CreatePostForm) => {
    console.log(data);
    // Here you would typically send the data to your API
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center">
              <Avatar className="w-12 h-12 mr-4">
                <AvatarFallback>YB</AvatarFallback>
              </Avatar>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Share an update..."
                        className="bg-gray-100 rounded-full py-2 px-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button
                type="button"
                variant="ghost"
                className="flex items-center"
                onClick={() => form.setValue("mediaType", "photo")}
              >
                <img
                  src="/api/placeholder/24/24"
                  alt="Photo"
                  className="mr-2"
                />{" "}
                Photo
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="flex items-center"
                onClick={() => form.setValue("mediaType", "video")}
              >
                <img
                  src="/api/placeholder/24/24"
                  alt="Video"
                  className="mr-2"
                />{" "}
                Video
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="flex items-center"
                onClick={() => form.setValue("mediaType", "event")}
              >
                <img
                  src="/api/placeholder/24/24"
                  alt="Event"
                  className="mr-2"
                />{" "}
                Event
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="flex items-center"
                onClick={() => form.setValue("mediaType", "article")}
              >
                <img
                  src="/api/placeholder/24/24"
                  alt="Article"
                  className="mr-2"
                />{" "}
                Write Article
              </Button>
            </div>
            <Button type="submit" className="mt-4 w-full">
              Post
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
