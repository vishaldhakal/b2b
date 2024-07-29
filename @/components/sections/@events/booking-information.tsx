import React from "react";
import { motion } from "framer-motion";
import { Info, Clock } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";

const BookingInfo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Info className="w-6 h-6 mr-2 text-primary" />
          Booking Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          To book a meeting location, please follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Select your preferred location from the options above.</li>
          <li>Click on the "Book This Location" button.</li>
          <li>Choose your desired date and time slot.</li>
          <li>Fill in the required details for your meeting.</li>
          <li>Confirm your booking and make any necessary payments.</li>
        </ol>
        <p className="text-muted-foreground flex items-center">
          <Clock className="w-5 h-5 mr-2 text-primary" />
          For any assistance or special requests, please contact our support
          team.
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

export default BookingInfo;
