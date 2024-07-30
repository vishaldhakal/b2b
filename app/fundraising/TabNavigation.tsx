import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="opportunities">
            Investment Opportunities
          </TabsTrigger>
          <TabsTrigger value="yourInvestments">Your Investments</TabsTrigger>
          <TabsTrigger value="raiseFunds">Raise Funds</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center space-x-2">
        <Input type="text" placeholder="Search opportunities..." />
        <Button variant="default">
          <Search className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
