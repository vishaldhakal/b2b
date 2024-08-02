import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Toggle } from "../../../../components/ui/toggle";
import { Gift, HandHeart } from "lucide-react";

const ToggleButton = ({ icon: Icon, label, ...props }) => (
  <Toggle
    variant="outline"
    size="lg"
    className="w-40 h-40 data-[state=on]:bg-blue-800 data-[state=on]:text-white"
    {...props}
  >
    <div className="flex flex-col justify-between items-center">
      <Icon className="h-10 w-10" />
      <span>{label}</span>
    </div>
  </Toggle>
);

export const ParticipationTypeStep = ({ form }) => (
  <FormField
    control={form.control}
    name="participationType"
    render={({ field }) => (
      <FormItem className="space-y-4">
        <FormLabel>Participation Type</FormLabel>
        <FormControl>
          <div className="flex justify-center space-x-4">
            <ToggleButton
              icon={Gift}
              label="Join with a Wish"
              pressed={field.value === "wish"}
              onPressedChange={(pressed) => pressed && field.onChange("wish")}
            />
            <ToggleButton
              icon={HandHeart}
              label="Join with an Offer"
              pressed={field.value === "offer"}
              onPressedChange={(pressed) => pressed && field.onChange("offer")}
            />
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
