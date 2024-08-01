import React from "react";
import { Play, Book, BarChart } from "lucide-react";
import { Button } from "../../@/components/ui/button";

export const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <Button variant="secondary" className="bg-green-500 hover:bg-green-600">
        <Play className="w-6 h-6 mr-2" />
        Start New Course
      </Button>
      <Button variant="secondary" className="bg-blue-900 hover:bg-blue-900">
        <Book className="w-6 h-6 mr-2" />
        Browse Catalog
      </Button>
      <Button variant="secondary" className="bg-purple-500 hover:bg-purple-600">
        <BarChart className="w-6 h-6 mr-2" />
        View Achievements
      </Button>
    </div>
  );
};
