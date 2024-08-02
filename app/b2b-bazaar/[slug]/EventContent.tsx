import { Tag, Link } from "lucide-react";
import { Badge } from "../../../@/components/ui/badge";
import { Event } from "./types";

interface EventContentProps {
  event: Event;
}

const EventContent = ({ event }: EventContentProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <Tag className="w-5 h-5 mr-2 text-gray-500" />
          <span>{event.organizer}</span>
        </div>
        <div className="flex items-center">
          <Link className="w-5 h-5 mr-2 text-gray-500" />
          <a
            href={event.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Event Website
          </a>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">About the Event</h3>
        <p className="text-gray-700">{event.description}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventContent;
