import React from "react";
import { Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../@/components/ui/tabs";
import { Button } from "../../@/components/ui/button";

interface TabNavigationProps {
  setShowPostModal: (show: boolean) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  setShowPostModal,
}) => (
  <div className="flex justify-end gap-3 items-center mb-6">
    {/* <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="yourWishes">Your Wishes</TabsTrigger>
        <TabsTrigger value="yourOffers">Your Offers</TabsTrigger>
        <TabsTrigger value="matches">Matches</TabsTrigger>
      </TabsList>
    </Tabs> */}
    <Button onClick={() => setShowPostModal(true)}>
      <Plus className="w-4 h-4 mr-2" /> Create a Wish
    </Button>
    <Button onClick={() => setShowPostModal(true)}>
      <Plus className="w-4 h-4 mr-2" /> Create an Offer
    </Button>
  </div>
);
