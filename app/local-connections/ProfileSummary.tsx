import React from 'react';
import { Card, CardContent, CardHeader } from "../../@/components/ui/card";
import { Avatar, AvatarFallback } from "../../@/components/ui/avatar";

export const ProfileSummary: React.FC = () => {
  return (
    <>
      <Card className="mb-4">
        <CardHeader className="h-20 bg-gray-300 rounded-t-lg"></CardHeader>
        <CardContent className="p-4 relative">
          <Avatar className="w-16 h-16 absolute -top-8 left-4 border-4 border-white">
            <AvatarFallback>YB</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold mt-8">Your Business Name</h2>
          <p className="text-gray-600 text-sm">Your Tagline Here</p>
          <div className="mt-4 text-sm">
            <p><strong>Connections:</strong> 500+</p>
            <p><strong>Location:</strong> Kathmandu, Nepal</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-bold mb-2">Your Dashboard</h3>
          <p className="text-sm text-gray-600">
            10 profile views<br />
            5 post impressions<br />
            3 search appearances
          </p>
        </CardContent>
      </Card>
    </>
  );
};
