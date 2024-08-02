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
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white shadow-xl rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">District Events</h2>
      <div className="grid grid-cols-1 gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader className="bg-gray-100  p-4">
              <CardTitle className="text-xl font-semibold">
                {event.district}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex flex-col md:flex-row justify-between items-end">
                <div className="space-y-3 flex-col">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">{event.venue}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {event.description}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="group hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                      Attend this Event
                      <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent
                    className="sm:max-w-2xl "
                    onInteractOutside={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <DialogHeader className="pb-2 border-b border-gray-200">
                      <DialogTitle className="text-2xl font-bold">
                        Attend Event: {event.district}
                      </DialogTitle>
                      <p className="text-sm text-gray-500 mt-1">
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

export default DistrictEvents;
