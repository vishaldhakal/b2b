import HeroBanner from "./HeroBanner";
import EventContent from "./EventContent";
import EnquiryForm from "./EnquiryForm";
import B2BEvents from "./B2BEvents";
import DistrictEvents from "./DistrictEvents";
import { Event } from "./types";

async function getEventData(id: string): Promise<Event> {
  // Mock data
  return {
    id: parseInt(id),
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
  };
}

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEventData(params.id);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroBanner event={event} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-8">
            <EventContent event={event} />
            <B2BEvents events={event.b2bEvents} mainEventTitle={event.title} />
            <DistrictEvents
              events={event.districtEvents}
              mainEventTitle={event.title}
            />
          </div>
          <div className="lg:w-1/3">
            <EnquiryForm eventId={event.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
