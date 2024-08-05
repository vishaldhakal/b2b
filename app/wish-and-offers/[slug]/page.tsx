"use client";
import React, { useState } from "react";
import { TabNavigation } from "../TabNavigation";
import { MatchmakingTips } from "../MatchmakingTips";
import { PostModal } from "../PostModal";
import { WishColumn } from "../WishColumn";
import { MatchColumn } from "../MatchColumn";
import { OfferColumn } from "../OfferColumn";

const WishAndOffersPage = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-6">
        <TabNavigation setShowPostModal={setShowPostModal} />
        <div className="flex flex-col lg:flex-row gap-6 mt-10">
          <WishColumn
            setSelectedItem={setSelectedItem}
            className="w-full lg:w-1/3 bg-blue-50 rounded-lg shadow-md"
          />
          <MatchColumn
            selectedItem={selectedItem}
            className="w-full lg:w-1/3 bg-green-50 rounded-lg shadow-md"
          />
          <OfferColumn
            setSelectedItem={setSelectedItem}
            className="w-full lg:w-1/3 bg-yellow-50 rounded-lg shadow-md"
          />
        </div>
        <MatchmakingTips />
      </main>
      {showPostModal && <PostModal setShowPostModal={setShowPostModal} />}
    </div>
  );
};

export default WishAndOffersPage;
