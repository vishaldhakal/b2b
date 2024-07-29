import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Coffee, Calendar } from "lucide-react";

import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import BookingModal from "./booking-form";

export type Location = {
  name: string;
  location: string;
  image: string;
  capacity: number;
  amenities: string[];
};

type LocationCardProps = {
  location: Location;
};

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div whileHover={{ y: -5 }}>
        <Card className="flex flex-col h-full">
          <div className="aspect-w-2 aspect-h-1">
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
            <p className="text-muted-foreground mb-4 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {location.location}
            </p>
            <ul className="text-sm text-muted-foreground mb-4 space-y-2">
              <li className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Capacity: {location.capacity} people
              </li>
              <li className="flex items-center">
                <Coffee className="w-4 h-4 mr-2" />
                Amenities: {location.amenities.join(", ")}
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button onClick={() => setIsModalOpen(true)} className="w-full">
              <Calendar className="w-4 h-4 mr-2" />
              Book This Location
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locationName={location.name}
      />
    </>
  );
};

export default LocationCard;
