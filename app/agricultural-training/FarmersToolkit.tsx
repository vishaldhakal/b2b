import React from 'react';
import { Tractor, Leaf, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";

const tools = [
  { icon: Tractor, title: "Equipment Guide", description: "Modern farming tools explained" },
  { icon: Leaf, title: "Crop Calendar", description: "Optimal planting and harvesting times" },
  { icon: Zap, title: "Market Prices", description: "Real-time agricultural commodity prices" },
];

export const FarmersToolkit: React.FC = () => (
  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4">Farmer's Toolkit</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <Card key={index}>
          <CardContent className="flex items-center p-6">
            <tool.icon className="w-8 h-8 text-green-600 mr-4" />
            <div>
              <CardTitle>{tool.title}</CardTitle>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);
