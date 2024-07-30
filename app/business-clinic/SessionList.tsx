import React from "react";
import { Calendar, Clock, Video } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

interface Session {
  id: number;
  title: string;
  expert: string;
  date: string;
  time: string;
  type: string;
}

const mockSessions: Session[] = [
  {
    id: 1,
    title: "Financial Strategy Review",
    expert: "Priya Patel",
    date: "Aug 15, 2024",
    time: "10:00 AM",
    type: "Video Call",
  },
  {
    id: 2,
    title: "Marketing Plan Consultation",
    expert: "Rajesh Gurung",
    date: "Aug 18, 2024",
    time: "2:00 PM",
    type: "In-person",
  },
];

export const SessionList: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockSessions.map((session) => (
            <div key={session.id} className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{session.title}</span>
                <span className="text-sm text-gray-500">
                  with {session.expert}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" /> {session.date}
                <Clock className="w-4 h-4 ml-4 mr-1" /> {session.time}
                <Video className="w-4 h-4 ml-4 mr-1" /> {session.type}
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-4">Schedule New Session</Button>
      </CardContent>
    </Card>
  );
};
