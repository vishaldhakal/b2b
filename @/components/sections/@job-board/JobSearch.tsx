import React from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";

const JobSearch = ({ selectedSkillLevel, setSelectedSkillLevel }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-6">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex items-center mb-4 md:mb-0 flex-grow mr-4">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <Input type="text" placeholder="Search jobs..." className="w-full" />
      </div>
      <div className="flex items-center space-x-2">
        <Select
          value={selectedSkillLevel}
          onValueChange={setSelectedSkillLevel}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Skill Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Skill Levels</SelectItem>
            <SelectItem value="low">Low Skill</SelectItem>
            <SelectItem value="medium">Medium Skill</SelectItem>
            <SelectItem value="high">High Skill</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="kathmandu">Kathmandu</SelectItem>
            <SelectItem value="pokhara">Pokhara</SelectItem>
            <SelectItem value="biratnagar">Biratnagar</SelectItem>
            <SelectItem value="chitwan">Chitwan</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
);

export default JobSearch;
