"use client";

import React from "react";
import { Search, Filter } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../ui/input";
import { CreateEventButton } from "./CreateEventButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";

// Define validation schema
const searchFilterSchema = yup
  .object({
    search: yup.string().required("Search term is required"),
    category: yup.string().required("Category is required"),
  })
  .required();

const SearchFilter = () => {
  const form = useForm({
    resolver: yupResolver(searchFilterSchema),
    defaultValues: {
      search: "",
      category: "all",
    },
  });

  const onSubmit = async (data) => {
    console.log("Booking submitted:", data);
    form.reset();
  };

  return (
    <Form {...form}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-3">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white rounded-lg border p-4 mb-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-3">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center mb-4 md:mb-0">
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Search events..."
                        className="w-full md:w-64"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="agriculture">
                            Agriculture
                          </SelectItem>
                          <SelectItem value="networking">Networking</SelectItem>
                          <SelectItem value="tourism">Tourism</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="ml-4">
              Search
            </Button>
          </div>
        </form>
        <div className="ml-auto">
          <CreateEventButton />
        </div>
      </div>
    </Form>
  );
};

export default SearchFilter;
