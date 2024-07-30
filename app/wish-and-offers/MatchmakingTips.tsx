import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";

export const MatchmakingTips: React.FC = () => (
  <Card className="mt-8 bg-blue-50">
    <CardHeader>
      <CardTitle>Matchmaking Tips</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Keep your wishes and offers up-to-date for better matches</li>
        <li>Be specific in your descriptions to attract relevant matches</li>
        <li>Regularly check your matches and respond promptly to inquiries</li>
      </ul>
    </CardContent>
  </Card>
);
