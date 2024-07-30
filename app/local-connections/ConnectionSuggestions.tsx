import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";
import { Avatar, AvatarFallback } from "../../@/components/ui/avatar";
import { Button } from "../../@/components/ui/button";
import { Plus } from 'lucide-react';

interface ConnectionSuggestion {
  id: number;
  name: string;
  mutual: number;
}

const mockSuggestions: ConnectionSuggestion[] = [
  { id: 1, name: "Mountain Tech Solutions", mutual: 12 },
  { id: 2, name: "Kathmandu Coffee Roasters", mutual: 8 },
  { id: 3, name: "Nepal Trekking Gear", mutual: 15 },
];

export const ConnectionSuggestions: React.FC = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>People you may know</CardTitle>
      </CardHeader>
      <CardContent>
        {mockSuggestions.map(suggestion => (
          <div key={suggestion.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Avatar className="w-12 h-12 mr-3">
                <AvatarFallback>{suggestion.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{suggestion.name}</p>
                <p className="text-gray-600 text-sm">{suggestion.mutual} mutual connections</p>
              </div>
            </div>
            <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 rounded-full p-1">
              <Plus className="w-6 h-6" />
            </Button>
          </div>
        ))}
        <Button variant="link" className="w-full">View all suggestions</Button>
      </CardContent>
    </Card>
  );
};
