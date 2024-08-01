import React from "react";
import { Button } from "../../ui/button";

export const CreateEventButton: React.FC = () => {
  return (
    <div className="text-center">
      <Button variant="default" size="lg">
        Create New Event
      </Button>
    </div>
  );
};
