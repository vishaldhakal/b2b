import React from "react";
import { Clock, Users, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

export const FeaturedCourse: React.FC = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Featured Course</CardTitle>
      </CardHeader>
      <CardContent className="bg-indigo-50 p-4 rounded-lg flex flex-col md:flex-row items-center">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2">
            Mastering Solar Panel Installation
          </h3>
          <CardDescription className="mb-4">
            Learn the latest techniques in solar panel installation and
            maintenance. Join the renewable energy revolution!
          </CardDescription>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Clock className="w-4 h-4 mr-1" /> 6 weeks
            <Users className="w-4 h-4 ml-4 mr-1" /> 100 enrolled
            <Star className="w-4 h-4 ml-4 mr-1 text-yellow-500" /> 4.9
          </div>
          <Button>Enroll Now</Button>
        </div>
        <img
          src="/api/placeholder/300/200"
          alt="Solar Panel Installation"
          className="w-full md:w-1/3 h-auto rounded-lg mt-4 md:mt-0 md:ml-4"
        />
      </CardContent>
    </Card>
  );
};
