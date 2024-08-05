import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Button } from "../../../../components/ui/button";
import { HelpCircle, Plus, Trash2 } from "lucide-react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { WishOfferFormData } from "./AttendDialog";
import { Card, CardContent } from "../../../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../ui/tooltip";

type WishOfferStepProps = {
  form: UseFormReturn<WishOfferFormData>;
};

export const WishOfferStep: React.FC<WishOfferStepProps> = ({ form }) => {
  const participationType = form.watch("participationType");
  const isOffer = participationType === "offer";
  const service_or_product = form.watch("service_or_product");

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "products",
  });

  const title = isOffer ? "Offer Details" : "Wish Details";

  const categoryOptions = isOffer
    ? [
        "Textiles",
        "Food & Beverage",
        "Handicrafts",
        "Agriculture",
        "Technology",
      ]
    : [
        "IT Services",
        "Design & Creative",
        "Writing & Translation",
        "Sales & Marketing",
        "Engineering & Architecture",
      ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{title}</h2>

      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{isOffer ? "Offer Title" : "Wish Title"}</FormLabel>
            <FormControl>
              <Input
                placeholder={`Enter your ${participationType} title`}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {categoryOptions.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
              <Textarea
                placeholder={`Describe your ${participationType} in detail`}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {isOffer ? "Offer Location" : "Wish Location"}
            </FormLabel>
            <FormControl>
              <Input placeholder="Enter location" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <>
        <FormField
          control={form.control}
          name="service_or_product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service or Product</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="service" />
                    </FormControl>
                    <FormLabel className="font-normal">Service</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="product" />
                    </FormControl>
                    <FormLabel className="font-normal">Product</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {service_or_product === "product" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FormLabel className="text-lg font-semibold">
                  Products
                </FormLabel>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Add the products you wish to offer. Include name, HS
                        code, and a brief description.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Button
                type="button"
                onClick={() =>
                  append({ name: "", hsCode: "", description: "" })
                }
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <Plus className="w-4 h-4 mr-2" /> Add Product
              </Button>
            </div>

            {fields.length > 0 && (
              <div className="bg-gray-50 p-3 rounded-md mb-4">
                <p className="font-medium">Added Products: {fields.length}</p>
                <ul className="list-disc list-inside">
                  {fields.map((field, index) => (
                    <li key={field.id} className="text-sm text-gray-600">
                      {field.name || `Product ${index + 1}`}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {fields.map((field, index) => (
              <Card key={field.id} className="relative">
                <CardContent className="pt-6">
                  <div className="absolute top-2 left-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name={`products.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Handmade Pashmina Shawl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`products.${index}.hsCode`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>HS Code</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 6214.20" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`products.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Brief description of the product"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => remove(index)}
                    className="absolute top-2 right-2"
                  >
                    <Trash2 className="w-4 h-4 mr-1" /> Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter your price"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </>
    </div>
  );
};
