import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const JobSeekerTips = () => (
  <Card className="mt-8 bg-blue-50">
    <CardHeader>
      <CardTitle>Job Seeker Tips</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Tailor your resume to each job application</li>
        <li>Prepare well for interviews, research the company</li>
        <li>Network and build professional relationships</li>
        <li>
          Consider skill development courses to enhance your qualifications
        </li>
      </ul>
    </CardContent>
  </Card>
);

export default JobSeekerTips;
