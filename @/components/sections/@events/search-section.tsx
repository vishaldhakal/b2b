import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";

const SearchSection = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">
          Find Your Perfect Event Space
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search locations..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="All Districts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Districts</SelectItem>
              <SelectItem value="biratnagar">Biratnagar</SelectItem>
              <SelectItem value="itahari">Itahari</SelectItem>
              <SelectItem value="birtamod">Birtamod</SelectItem>
              <SelectItem value="jhapa">Jhapa</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full sm:w-auto">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default SearchSection;
