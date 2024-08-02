import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MultiStepForm } from "./multi-step-form/AttendDialog";

export interface Event {
  id: number;
  title: string;
  thumbnail?: string;
  startDate: string;
  endDate: string;
  location: string;
  attendees: number;
  type: string;
  description: string;
  organizer: string;
  ticketPrice: string;
  website: string;
  tags: string[];
}

const mockEvents: Event[] = [
  {
    id: parseInt("34"),
    title: "Birat Expo 2024",
    thumbnail: "/13.png",
    startDate: "Dec 21, 2024",
    endDate: "Dec 31, 2024",
    location: "Bhrikutimandap, Kathmandu",
    attendees: 300000,
    type: "Technology",
    description:
      "Nepal's largest technology and innovation expo showcasing the latest advancements in AI, robotics, and sustainable tech.",
    organizer: "Tech Nepal Association",
    ticketPrice: "NPR 500",
    website: "https://biratexpo2024.com",
    tags: ["AI", "Robotics", "Green Tech", "Startups"],
  },
];

export const EventList: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockEvents.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <Image
              src={event.thumbnail || "/placeholder.png"}
              className="max-w-100"
              alt="event thumbnail"
              width={600}
              height={600}
            />
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{event.startDate}</span>
              <span className="mx-2">to</span>
              <span>{event.endDate}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Users className="w-4 h-4 mr-2" />
              <span>{event.attendees} Attendees</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Badge variant="secondary">{event.type}</Badge>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => setSelectedEvent(event)}
                >
                  Attend this event
                </Button>
              </DialogTrigger>
              {selectedEvent && (
                <DialogContent
                  className="sm:max-w-2xl"
                  onInteractOutside={(e) => {
                    e.preventDefault();
                  }}
                >
                  <DialogHeader>
                    <DialogTitle>
                      Attend Event: {selectedEvent?.title}
                    </DialogTitle>
                  </DialogHeader>
                  <MultiStepForm onClose={() => setSelectedEvent(null)} />
                </DialogContent>
              )}
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
