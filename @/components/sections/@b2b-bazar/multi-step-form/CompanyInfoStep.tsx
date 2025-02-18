import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../ui/textarea";

export const CompanyInfoStep = ({ form }) => (
  <>
    <FormField
      control={form.control}
      name="company"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company Name</FormLabel>
          <FormControl>
            <Input placeholder="Your company name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FormField
        control={form.control}
        name="position"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your Current Position</FormLabel>
            <FormControl>
              <Input placeholder="Your position" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="companyPhone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Phone Number</FormLabel>
            <FormControl>
              <Input
                placeholder="Your phone number"
                {...field}
                className="w-full"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FormField
        control={form.control}
        name="companyEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Email</FormLabel>
            <FormControl>
              <Input placeholder="Your email address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="companyAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Address</FormLabel>
            <FormControl>
              <Input placeholder="Your company address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
    <FormField
      control={form.control}
      name="companyWebsite"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company Website</FormLabel>
          <FormControl>
            <Input placeholder="Your company website" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="companyDescription"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company Description</FormLabel>
          <FormControl>
            <Textarea placeholder="Your company description" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
