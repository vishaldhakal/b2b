import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

const sessions = [
  {
    title: "Organic Pest Control Methods",
    expert: "Dr. Asha Rai",
    date: "Aug 20, 2024",
    location: "Online Webinar",
  },
  {
    title: "Soil Health Management",
    expert: "Prakash Adhikari",
    date: "Aug 25, 2024",
    location: "Kathmandu Agricultural Center",
  },
];

export const ExpertSessions: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Upcoming Expert Sessions</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {sessions.map((session, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{session.title}</span>
              <span className="text-sm text-gray-500">with {session.expert}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-1" /> {session.date}
              <MapPin className="w-4 h-4 ml-4 mr-1" /> {session.location}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button>View All Sessions</Button>
    </CardFooter>
  </Card>
);
