import React from 'react';
import { Calendar, User, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

const courses = [
  { id: 1, title: "Sustainable Rice Cultivation", duration: "4 weeks", level: "Intermediate", region: "Terai" },
  { id: 2, title: "High-Altitude Vegetable Farming", duration: "6 weeks", level: "Advanced", region: "Mountains" },
  { id: 3, title: "Organic Tea Production", duration: "5 weeks", level: "Beginner", region: "Hills" },
  { id: 4, title: "Modern Beekeeping Techniques", duration: "3 weeks", level: "Beginner", region: "All Regions" },
  { id: 5, title: "Efficient Irrigation Systems", duration: "4 weeks", level: "Intermediate", region: "All Regions" },
  { id: 6, title: "Climate-Resilient Farming", duration: "6 weeks", level: "Advanced", region: "All Regions" },
];

export const CourseList: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {courses.map(course => (
      <Card key={course.id}>
        <CardHeader>
          <CardTitle>{course.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="w-4 h-4 mr-1" /> {course.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <User className="w-4 h-4 mr-1" /> {course.level}
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <MapPin className="w-4 h-4 mr-1" /> {course.region}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Enroll Now</Button>
        </CardFooter>
      </Card>
    ))}
  </div>
);
