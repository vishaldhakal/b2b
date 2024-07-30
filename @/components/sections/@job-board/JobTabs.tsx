import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";

const JobTabs = ({ activeTab, setActiveTab }) => (
  <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
    <TabsList>
      <TabsTrigger value="findJobs">Find Jobs</TabsTrigger>
      <TabsTrigger value="postJob">Post a Job</TabsTrigger>
    </TabsList>
  </Tabs>
);

export default JobTabs;
