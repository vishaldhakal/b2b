"use client";
import React, { useState } from "react";
import { TabNavigation } from "./TabNavigation";
import { InvestmentOpportunities } from "./InvestmentOpportunities";
import { YourInvestments } from "./YourInvestments";
import { RaiseFunds } from "./RaiseFunds";
import { InvestmentTips } from "./InvestmentTips";

const FundraisingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("opportunities");

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-6">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "opportunities" && <InvestmentOpportunities />}
        {activeTab === "yourInvestments" && <YourInvestments />}
        {activeTab === "raiseFunds" && <RaiseFunds />}
        <InvestmentTips />
      </main>
    </div>
  );
};

export default FundraisingPage;
