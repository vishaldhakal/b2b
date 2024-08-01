"use client";
import React, { useState } from "react";
import { TabNavigation } from "./TabNavigation";
import { YourWishes } from "./YourWishes";
import { YourOffers } from "./YourOffers";
import { MatchmakingTips } from "./MatchmakingTips";
import { PostModal } from "./PostModal";

const WishAndOffersPage: React.FC = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <div className="">
      <main className="container mx-auto px-4 py-6">
        <TabNavigation setShowPostModal={setShowPostModal} />
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="w-full md:w-1/2">
            <YourWishes />
          </div>
          <div className="w-full md:w-1/2">
            <YourOffers />
          </div>
        </div>
        <MatchmakingTips />
      </main>
      {showPostModal && <PostModal setShowPostModal={setShowPostModal} />}
    </div>
  );
};

export default WishAndOffersPage;
