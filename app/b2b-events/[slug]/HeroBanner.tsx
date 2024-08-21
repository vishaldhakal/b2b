import { Button } from "../../../@/components/ui/button";
import { Event } from "./types";
import { Calendar, MapPin, Users } from "lucide-react";

interface HeroBannerProps {
  event: Event;
}

const HeroBanner = ({ event }: HeroBannerProps) => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
          {event.title}
        </h1>
        <p className="text-xl mb-6 max-w-2xl animate-fade-in-up">
          {event.description}
        </p>
        <div className="flex space-x-4 mb-8 animate-fade-in">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>
              {event.startDate} - {event.endDate}
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            <span>{event.attendees.toLocaleString()} Attendees</span>
          </div>
        </div>
        <Button className="w-48">Attend This Event</Button>
      </div>
    </div>
  );
};

export default HeroBanner;
