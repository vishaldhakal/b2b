import React from "react";
import { MapPin } from "lucide-react";

const DistrictButton = ({ name }) => (
  <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded flex items-center justify-center transition-colors duration-300">
    <MapPin className="mr-2 h-4 w-4 text-blue-600" />
    {name}
  </button>
);

const DistrictSection = () => (
  <section className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">District B2B Networking</h2>
    <p className="text-gray-600 mb-6">
      Explore business opportunities in specific districts and regions.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["Biratnagar", "Itahari", "Birtamod", "Jhapa"].map((district) => (
        <DistrictButton key={district} name={district} />
      ))}
    </div>
  </section>
);

export default DistrictSection;
