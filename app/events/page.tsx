"use client";

import React from "react";
import {
  BookingInfo,
  LocationList,
  SearchSection,
} from "../../@/components/sections/@events";

const locations = [
  {
    name: "Birat Expo 2024 Premises",
    location: "Biratnagar, Morang",
    capacity: 500,
    amenities: ["Wi-Fi", "Projector", "Catering"],
    image: "https://via.placeholder.com/400x200",
  },
  {
    name: "Biratnagar CIM Secretariat Building",
    location: "Biratnagar, Morang",
    capacity: 200,
    amenities: ["Wi-Fi", "Conference Rooms"],
    image: "https://via.placeholder.com/400x200",
  },
  {
    name: "Itahari Conference Center",
    location: "Itahari, Sunsari",
    capacity: 300,
    amenities: ["Wi-Fi", "AV Equipment", "Parking"],
    image: "https://via.placeholder.com/400x200",
  },
];

function EventsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <SearchSection />
      <LocationList locations={locations} />
      <BookingInfo />
    </main>
  );
}

export default EventsPage;
