// MakeOfferForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../@/components/ui/form";
import { Input } from "../../@/components/ui/input";
import { Textarea } from "../../@/components/ui/textarea";
import { Button } from "../../@/components/ui/button";
import { Wish } from "./types";

interface MakeOfferFormProps {
  wish: Wish;
  onClose: () => void;
}

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .positive("Price must be positive")
    .required("Price is required"),
});

type FormData = yup.InferType<typeof schema>;

export const MakeOfferForm: React.FC<MakeOfferFormProps> = ({
  wish,
  onClose,
}) => {
  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      price: undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make an Offer for: {wish.title}</DialogTitle>
          <DialogDescription>
            Fill out the form below to make an offer for this wish.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Offer Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your offer title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Describe your offer" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Enter your price"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit Offer</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
