"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../@/components/ui/select";
import { Textarea } from "../../@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../@/components/ui/form";
import { RaiseFundsForm, raiseFundsFormSchema } from "./types";

export const RaiseFunds: React.FC = () => {
  const form = useForm({
    resolver: yupResolver(raiseFundsFormSchema),
    defaultValues: {
      businessName: "",
      industry: "",
      fundingGoal: 0,
      campaignDuration: 30,
      businessDescription: "",
    },
  });

  const onSubmit = (data: RaiseFundsForm) => {
    console.log(data);
    // Here you would typically send the data to your API
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Raise Funds for Your Business</CardTitle>
        <CardDescription>
          Ready to take your business to the next level? Create your fundraising
          campaign and connect with potential investors.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your business name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="manufacturing">
                        Manufacturing
                      </SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fundingGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Funding Goal (in NPR)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter funding goal"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="campaignDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Duration (in days)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter campaign duration"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your business and how you plan to use the funds"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Create Fundraising Campaign
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
