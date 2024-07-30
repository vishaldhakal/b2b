import React from "react";
import { Clock, Award, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

interface Course {
  id: number;
  title: string;
  duration: string;
  level: string;
  rating: number;
  enrolled: number;
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: "Basic Carpentry",
    duration: "4 weeks",
    level: "Beginner",
    rating: 4.5,
    enrolled: 250,
  },
  {
    id: 2,
    title: "Advanced Welding Techniques",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.8,
    enrolled: 180,
  },
  {
    id: 3,
    title: "Electrical Wiring for Homes",
    duration: "5 weeks",
    level: "Beginner",
    rating: 4.6,
    enrolled: 300,
  },
  {
    id: 4,
    title: "Automotive Repair Fundamentals",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.7,
    enrolled: 220,
  },
  {
    id: 5,
    title: "Plumbing Essentials",
    duration: "4 weeks",
    level: "Beginner",
    rating: 4.4,
    enrolled: 270,
  },
  {
    id: 6,
    title: "HVAC Systems and Maintenance",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.9,
    enrolled: 150,
  },
];

export const CourseList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockCourses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Clock className="w-4 h-4 mr-1" /> {course.duration}
              <Award className="w-4 h-4 ml-4 mr-1" /> {course.level}
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span>{course.rating}</span>
              </div>
              <span className="text-sm text-gray-500">
                {course.enrolled} enrolled
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Course</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
