import React from "react";
import { motion } from "framer-motion";
import LocationCard, { Location } from "./location-card";

type LocationListProps = {
  locations: Location[];
};

const LocationList: React.FC<LocationListProps> = ({ locations }) => (
  <section className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {locations.map((location, index) => (
        <motion.div
          key={location.name}
          className="h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <LocationCard location={location} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default LocationList;
