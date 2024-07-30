import React from "react";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const jobs = [
  {
    id: 1,
    title: "Construction Worker",
    company: "Nepal Builders Ltd.",
    location: "Kathmandu",
    type: "Full-time",
    salary: "Rs. 20,000 - 25,000/month",
    postedAt: "2 days ago",
    skillLevel: "low",
  },
  {
    id: 2,
    title: "Delivery Driver",
    company: "Swift Logistics",
    location: "Pokhara",
    type: "Full-time",
    salary: "Rs. 18,000 - 22,000/month",
    postedAt: "1 day ago",
    skillLevel: "low",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "TechNepal",
    location: "Kathmandu",
    type: "Full-time",
    salary: "Rs. 80,000 - 120,000/month",
    postedAt: "3 days ago",
    skillLevel: "high",
  },
  {
    id: 4,
    title: "Hotel Receptionist",
    company: "Himalayan Resorts",
    location: "Nagarkot",
    type: "Full-time",
    salary: "Rs. 25,000 - 30,000/month",
    postedAt: "5 days ago",
    skillLevel: "medium",
  },
  {
    id: 5,
    title: "Accountant",
    company: "Nepal Finance Corp.",
    location: "Biratnagar",
    type: "Full-time",
    salary: "Rs. 50,000 - 70,000/month",
    postedAt: "1 week ago",
    skillLevel: "high",
  },
  {
    id: 6,
    title: "Farm Worker",
    company: "Green Nepal Farms",
    location: "Chitwan",
    type: "Seasonal",
    salary: "Rs. 15,000 - 20,000/month",
    postedAt: "3 days ago",
    skillLevel: "low",
  },
];

const JobList = ({ selectedSkillLevel }) => {
  const filteredJobs =
    selectedSkillLevel === "all"
      ? jobs
      : jobs.filter((job) => job.skillLevel === selectedSkillLevel);

  return (
    <div className="space-y-4">
      {filteredJobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{job.title}</CardTitle>
                <p className="text-sm text-gray-600">{job.company}</p>
              </div>
              <Badge
                variant={
                  job.skillLevel === "low"
                    ? "secondary"
                    : job.skillLevel === "medium"
                    ? "default"
                    : "outline"
                }
              >
                {job.skillLevel === "low"
                  ? "Low Skill"
                  : job.skillLevel === "medium"
                  ? "Medium Skill"
                  : "High Skill"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <MapPin className="w-4 h-4 mr-1" /> {job.location}
              <Clock className="w-4 h-4 ml-4 mr-1" /> {job.type}
              <DollarSign className="w-4 h-4 ml-4 mr-1" /> {job.salary}
            </div>
            <p className="text-sm text-gray-600">Posted {job.postedAt}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">View Details</Button>
            <Button>Apply Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default JobList;
