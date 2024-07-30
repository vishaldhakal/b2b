"use client";
import React from "react";
import { ProfileSummary } from "./ProfileSummary";
import { CreatePost } from "./CreatePost";
import { PostFeed } from "./PostFeed";
import { ConnectionSuggestions } from "./ConnectionSuggestions";
import { UpcomingEvents } from "./UpcomingEvents";

const LocalConnectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-6 flex">
        <div className="w-1/4 pr-6">
          <ProfileSummary />
        </div>
        <div className="w-1/2 px-6">
          <CreatePost />
          <PostFeed />
        </div>
        <div className="w-1/4 pl-6">
          <ConnectionSuggestions />
          <UpcomingEvents />
        </div>
      </main>
    </div>
  );
};

export default LocalConnectionsPage;
