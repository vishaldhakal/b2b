"use client";

import React, { useState } from "react";
import { Calendar, MapPin, ChevronRight, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../@/components/ui/card";
import { Button } from "../../../@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";
import { MultiStepForm } from "../../../@/components/sections/@b2b-bazar/multi-step-form/AttendDialog";

interface DistrictEvent {
  id: number;
  district: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

interface DistrictEventsProps {
  events: DistrictEvent[];
  mainEventTitle: string;
}

const DistrictEvents: React.FC<DistrictEventsProps> = ({
  events,
  mainEventTitle,
}) => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const handleOpenDialog = (eventId: number) => {
    setOpenDialog(eventId);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
        Each District Meeting
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader className="bg-gray-100 p-3 sm:p-4">
              <CardTitle className="text-lg sm:text-xl font-semibold">
                {event.district}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div className="space-y-2 sm:space-y-3 w-full sm:w-auto">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">
                      {event.venue}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                    {event.description}
                  </p>
                </div>

                <Dialog
                  open={openDialog === event.id}
                  onOpenChange={(open) =>
                    open ? handleOpenDialog(event.id) : handleCloseDialog()
                  }
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="group hover:bg-blue-500 hover:text-white transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                      onClick={() => handleOpenDialog(event.id)}
                    >
                      <span className="mr-1">Attend this Meeting</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent
                    className="sm:max-w-2xl max-w-[95vw] max-h-[90vh] flex flex-col"
                    onInteractOutside={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <DialogHeader className="pb-2 border-b border-gray-200 flex-shrink-0 flex justify-between items-center">
                      <div>
                        <DialogTitle className="text-xl sm:text-2xl font-bold">
                          Attend Event: {event.district}
                        </DialogTitle>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          Part of {mainEventTitle}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCloseDialog}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogHeader>
                    <div className="overflow-y-auto flex-grow">
                      <MultiStepForm onClose={handleCloseDialog} />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DistrictEvents;
