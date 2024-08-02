import React from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Building2,
  MapPinned,
} from "lucide-react";
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
import Link from "next/link";
import { Event } from "../../../../app/b2b-bazaar/[slug]/types";

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
    b2bEvents: [
      {
        id: 1,
        title: "AI in Healthcare",
        date: "Dec 22, 2024",
        time: "10:00 AM",
        venue: "Birat Expo Hall",
        description: "Exploring the impact of AI in modern healthcare.",
      },
    ],
    districtEvents: [
      {
        id: 1,
        district: "Bhojpur",
        date: "Jan 5, 2025",
        time: "10:00 AM",
        venue: "Bhojpur Community Hall",
        description: "Bringing the Birat Expo experience to Bhojpur.",
      },
      {
        id: 2,
        district: "Dhankuta",
        date: "Jan 7, 2025",
        time: "11:00 AM",
        venue: "Dhankuta Municipality Hall",
        description: "Showcasing tech innovations in Dhankuta.",
      },
      {
        id: 3,
        district: "Ilam",
        date: "Jan 9, 2025",
        time: "10:30 AM",
        venue: "Ilam Tea Garden",
        description: "Tech meets nature: Birat Expo in Ilam.",
      },
      {
        id: 4,
        district: "Jhapa",
        date: "Jan 11, 2025",
        time: "9:00 AM",
        venue: "Jhapa Exhibition Ground",
        description: "Exploring the future of tech in Jhapa.",
      },
      {
        id: 5,
        district: "Khotang",
        date: "Jan 13, 2025",
        time: "11:30 AM",
        venue: "Khotang District Office",
        description: "Khotang's first major tech expo.",
      },
      {
        id: 6,
        district: "Morang",
        date: "Jan 15, 2025",
        time: "10:00 AM",
        venue: "Biratnagar Trade Tower",
        description: "Morang's gateway to cutting-edge technology.",
      },
      {
        id: 7,
        district: "Okhaldhunga",
        date: "Jan 17, 2025",
        time: "9:30 AM",
        venue: "Okhaldhunga Community Center",
        description: "Bringing tech innovations to Okhaldhunga.",
      },
      {
        id: 8,
        district: "Panchthar",
        date: "Jan 19, 2025",
        time: "11:00 AM",
        venue: "Panchthar Municipality Hall",
        description: "Exploring the tech landscape in Panchthar.",
      },
      {
        id: 9,
        district: "Sankhuwasabha",
        date: "Jan 21, 2025",
        time: "10:00 AM",
        venue: "Sankhuwasabha District Office",
        description: "Tech innovations reach Sankhuwasabha.",
      },
      {
        id: 10,
        district: "Solukhumbu",
        date: "Jan 23, 2025",
        time: "9:00 AM",
        venue: "Solukhumbu Mountaineering Museum",
        description:
          "Where tech meets the mountains: Birat Expo in Solukhumbu.",
      },
      {
        id: 11,
        district: "Sunsari",
        date: "Jan 25, 2025",
        time: "10:30 AM",
        venue: "Itahari Exhibition Center",
        description: "Sunsari's dive into the world of technology.",
      },
      {
        id: 12,
        district: "Taplejung",
        date: "Jan 27, 2025",
        time: "11:00 AM",
        venue: "Taplejung District Hall",
        description: "Taplejung welcomes the Birat Expo experience.",
      },
      {
        id: 13,
        district: "Tehrathum",
        date: "Jan 29, 2025",
        time: "10:00 AM",
        venue: "Tehrathum Community Center",
        description: "Tech innovations showcase in Tehrathum.",
      },
      {
        id: 14,
        district: "Udayapur",
        date: "Jan 31, 2025",
        time: "9:30 AM",
        venue: "Udayapur Municipality Hall",
        description:
          "Concluding the Koshi Province tour: Birat Expo in Udayapur.",
      },
    ],
  },
];

export const EventList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockEvents.map((event) => (
        <Link href={`/b2b-bazaar/${event.id}`} key={event.id}>
          <Card
            className="border border-gray-200 rounded-lg overflow-hidden
            hover:scaled hover:shadow-lg hover:-translate-y-1 transition-all duration-300
          p-2 cursor-pointer h-full flex flex-col"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={event.thumbnail || "/placeholder.png"}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white text-gray-800">
                    {event.type}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-xl font-bold mb-3 text-gray-800">
                {event.title}
              </CardTitle>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                  <span>
                    {event.startDate} - {event.endDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                  <span>{event.attendees.toLocaleString()} Attendees</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                  <span>{event.b2bEvents.length} Sub-events</span>
                </div>
                <div className="flex items-center">
                  <MapPinned className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                  <span>{event.districtEvents.length} District events</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 bg-gray-50 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                View Details
              </span>
              <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};
