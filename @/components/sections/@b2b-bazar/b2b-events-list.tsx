import React from "react";
import { EventData } from "../landing/event-section";
import EventCard from "../landing/event-card";

const B2BNetworkingEvents: React.FC = () => {
  const events: EventData[] = [
    {
      date: "FRI, NOV 29, 2024",
      time: "6:30 PM",
      timezone: "NZDT",
      title: "Indian Business Networking Meet Up",
      location: "Takapuna Boating Club Inc, Beach",
      imageUrl: "/Logo.svg",
      description:
        "Hello fellow Networkers! Join us for a Special Indian Business Networking event that promises to be an evening filled with opportunities, insights, and connections.",
      attendees: [
        { name: "Raj Patel" },
        { name: "Priya Singh" },
        { name: "Amit Kumar" },
      ],
    },
    {
      date: "SAT, DEC 7, 2024",
      time: "2:00 PM",
      timezone: "NZDT",
      title: "Tech Startup Showcase",
      location: "Auckland Innovation Hub, CBD",
      imageUrl: "/Logo.svg",
      description:
        "Calling all tech entrepreneurs! Showcase your innovative ideas, connect with investors, and learn from industry leaders at our Tech Startup event.",
      attendees: [
        { name: "Emma Watson" },
        { name: "Liam Chen" },
        { name: "Sophie Taylor" },
        { name: "Noah Williams" },
      ],
    },
    {
      date: "WED, JAN 15, 2025",
      time: "7:00 PM",
      timezone: "NZDT",
      title: "Women in Business Leadership Forum",
      location: "Aotea Centre, Auckland",
      imageUrl: "/Logo.svg",
      description:
        "Empowering women in business! Join us for an inspiring evening of networking, mentorship, and discussions on breaking barriers in the corporate world.",
      attendees: [
        { name: "Sarah Johnson" },
        {
          name: "Maria Rodriguez",
        },
        { name: "Olivia Brown" },
        { name: "Emily Clark" },
        { name: "Ava Martin" },
      ],
    },
    {
      date: "TUE, FEB 4, 2025",
      time: "5:30 PM",
      timezone: "NZDT",
      title: "Sustainable Business Practices Seminar",
      location: "Ellerslie Event Centre, Auckland",
      imageUrl: "/Logo.svg",
      description:
        "Learn how to integrate sustainable practices into your business model. Network with eco-conscious entrepreneurs and discover green innovation opportunities.",
      attendees: [
        { name: "David Green" },
        { name: "Zoe Evans" },
        { name: "Lucas Baker" },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          B2B Networking Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BNetworkingEvents;
