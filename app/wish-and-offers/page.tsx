"use client";
import React, { useState } from "react";
import { TabNavigation } from "./TabNavigation";
import { MatchmakingTips } from "./MatchmakingTips";
import { PostModal } from "./PostModal";
import { WishOffersEventList } from "../../@/components/sections/wish-offers/WishOffersList";

const WishAndOffersPage: React.FC = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <div className="">
      <main className="container mx-auto px-4 py-6">
        <TabNavigation setShowPostModal={setShowPostModal} />
        <WishOffersEventList />
        <MatchmakingTips />
      </main>
      {showPostModal && <PostModal setShowPostModal={setShowPostModal} />}
    </div>
  );
};

export default WishAndOffersPage;
