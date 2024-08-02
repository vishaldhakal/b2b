import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Label } from "../../../../components/ui/label";

export const ParticipationTypeStep = ({ form }) => (
  <FormField
    control={form.control}
    name="participationType"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Participation Type</FormLabel>
        <FormControl>
          <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="wish" id="wish" />
              <Label htmlFor="wish">Join with a Wish</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="offer" id="offer" />
              <Label htmlFor="offer">Join with an Offer</Label>
            </div>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
