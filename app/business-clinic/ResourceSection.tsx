import React from "react";
import { BookOpen, Video, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";

const resources = [
  {
    icon: BookOpen,
    title: "E-Books",
    description: "Access our library of business guides",
  },
  {
    icon: Video,
    title: "Webinars",
    description: "Watch expert talks and workshops",
  },
  {
    icon: Award,
    title: "Success Stories",
    description: "Learn from thriving businesses",
  },
];

export const ResourceSection: React.FC = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Business Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center space-x-4">
              <resource.icon className="w-8 h-8 text-teal-600" />
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
