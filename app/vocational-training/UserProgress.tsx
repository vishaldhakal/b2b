import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Progress } from "../../@/components/ui/progress";

interface UserCourseProgress {
  course: string;
  progress: number;
}

const mockUserProgress: UserCourseProgress[] = [
  { course: "Basic Carpentry", progress: 75 },
  { course: "Electrical Wiring for Homes", progress: 30 },
];

export const UserProgress: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Learning Progress</CardTitle>
      </CardHeader>
      <CardContent>
        {mockUserProgress.map((course, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{course.course}</span>
              <span className="text-sm text-gray-500">
                {course.progress}% Complete
              </span>
            </div>
            <Progress value={course.progress} className="w-full" />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button>Resume Learning</Button>
      </CardFooter>
    </Card>
  );
};
