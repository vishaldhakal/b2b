"use client";
import React, { useState } from "react";
import { TabNavigation } from "./TabNavigation";
import { YourWishes } from "./YourWishes";
import { YourOffers } from "./YourOffers";
import { Matches } from "./Matches";
import { MatchmakingTips } from "./MatchmakingTips";
import { PostModal } from "./PostModal";

const WishAndOffersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("yourWishes");
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-6">
        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowPostModal={setShowPostModal}
        />
        {activeTab === "yourWishes" && <YourWishes />}
        {activeTab === "yourOffers" && <YourOffers />}
        {activeTab === "matches" && <Matches />}
        <MatchmakingTips />
      </main>
      {showPostModal && <PostModal setShowPostModal={setShowPostModal} />}
    </div>
  );
};

export default WishAndOffersPage;
