import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";

export const InvestmentTips: React.FC = () => {
  return (
    <Card className="mt-8 bg-blue-50">
      <CardHeader>
        <CardTitle>Investment Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Diversify your investments across different industries</li>
          <li>Research thoroughly before investing in any opportunity</li>
          <li>Consider the business plan and growth potential</li>
          <li>Stay updated with Nepal's business and economic trends</li>
        </ul>
      </CardContent>
    </Card>
  );
};
