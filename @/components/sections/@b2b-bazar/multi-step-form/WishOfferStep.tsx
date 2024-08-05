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
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { WishOfferFormData } from "./AttendDialog";

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
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <FormLabel>Products</FormLabel>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  append({ name: "", hsCode: "", description: "" })
                }
              >
                <Plus className="w-4 h-4 mr-2" /> Add Product
              </Button>
            </div>
            {fields.reverse().map((field, index) => (
              <div key={field.id} className="flex space-x-2 items-center">
                <div className="flex space-x-1 flex-1 w-full">
                  <FormField
                    control={form.control}
                    name={`products.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Product name" {...field} />
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
                        <FormControl>
                          <Input placeholder="HS Code" {...field} />
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
                        <FormControl>
                          <Textarea
                            placeholder="Short description (optional)"
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
                  variant="ghost"
                  size="icon"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
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
