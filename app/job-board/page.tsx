"use client";
import React, { useState } from "react";
import JobTabs from "../../@/components/sections/@job-board/JobTabs";
import JobSearch from "../../@/components/sections/@job-board/JobSearch";
import JobList from "../../@/components/sections/@job-board/JobList";
import PostJob from "../../@/components/sections/@job-board/PostJob";

const JobBoardPage = () => {
  const [activeTab, setActiveTab] = useState("findJobs");
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("all");

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-6">
        <JobTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "findJobs" && (
          <>
            <JobSearch
              selectedSkillLevel={selectedSkillLevel}
              setSelectedSkillLevel={setSelectedSkillLevel}
            />
            <JobList selectedSkillLevel={selectedSkillLevel} />
          </>
        )}
        {activeTab === "postJob" && <PostJob />}
      </main>
    </div>
  );
};

export default JobBoardPage;
