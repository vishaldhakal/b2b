import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { MapPin } from "lucide-react";

// Define the type for an attendee
interface Attendee {
  name: string;
  avatarUrl?: string;
}

// Define the type for the event data
interface EventData {
  date: string;
  time: string;
  timezone: string;
  title: string;
  location: string;
  imageUrl: string;
  description: string;
  attendees: Attendee[];
}

// Define the props for the EventCard component
interface EventCardProps {
  event: EventData;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-[#0b879b] font-semibold mb-2">
              {`${event.date}, ${event.time} ${event.timezone}`}
            </p>
            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
            <div className="flex items-center text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{event.location}</span>
            </div>
          </div>
          <img src={event.imageUrl} alt={event.title} className="object-fit" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-semibold mb-2">
          🎉 PLEASE FILL THE FORM TO CONFIRM YOUR ATTENDANCE 🎉
        </p>
        <p className="mb-4">Dear Meetup Group Members,</p>
        <p className="text-sm">{event.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex -space-x-3 mr-2">
            {event.attendees.slice(0, 4).map((attendee, i) => (
              <Avatar key={i} className="border-2 border-white">
                {attendee.avatarUrl ? (
                  <AvatarImage src={attendee.avatarUrl} alt={attendee.name} />
                ) : (
                  <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                )}
              </Avatar>
            ))}
          </div>
          <span className="text-sm text-gray-500">{`${event.attendees.length} attendees`}</span>
        </div>
        <Button
          variant="outline"
          className="
          border-[#0b879b] text-[#0b879b] hover:bg-[#0b879b] hover:text-white
        "
        >
          Attend
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
