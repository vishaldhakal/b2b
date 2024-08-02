"use client";
import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
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
import { SubEvent } from "./types";

interface B2BEventsProps {
  events: SubEvent[];
  mainEventTitle: string;
}

const B2BEvents: React.FC<B2BEventsProps> = ({ events, mainEventTitle }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-gray-200 border rounded-2xl p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
        B2B General Meeting
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 sm:p-4">
              <CardTitle className="text-lg sm:text-xl font-semibold">
                {event.title}
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

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="group hover:bg-blue-500 hover:text-white transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                    >
                      <span className="mr-1">Attend this Meeting</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent
                    className="sm:max-w-2xl max-w-[95vw]"
                    onInteractOutside={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <DialogHeader className="pb-2 border-b border-gray-200">
                      <DialogTitle className="text-xl sm:text-2xl font-bold">
                        Attend Event: {event.title}
                      </DialogTitle>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Part of {mainEventTitle}
                      </p>
                    </DialogHeader>
                    <MultiStepForm onClose={() => {}} />
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

export default B2BEvents;
