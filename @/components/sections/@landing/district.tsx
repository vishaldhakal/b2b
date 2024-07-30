import React from "react";
import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

const DistrictButton = ({ name }) => (
  <Button variant="outline" className="w-full justify-start">
    <MapPin className="mr-2 h-4 w-4 text-blue-600" />
    {name}
  </Button>
);

const DistrictSection = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-2xl">District B2B Networking</CardTitle>
      <p className="text-gray-600">
        Explore business opportunities in specific districts and regions.
      </p>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Biratnagar", "Itahari", "Birtamod", "Jhapa"].map((district) => (
          <DistrictButton key={district} name={district} />
        ))}
      </div>
    </CardContent>
  </Card>
);

export default DistrictSection;
