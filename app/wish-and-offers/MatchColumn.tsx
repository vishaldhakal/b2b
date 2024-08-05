import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
import { Badge } from "../../@/components/ui/badge";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Clock, Eye, MapPin, ThumbsUp } from "lucide-react";

const MatchItem = ({ match, type }) => (
  <Card className="mb-4 overflow-hidden border-green-200 hover:shadow-lg transition-all duration-300">
    <CardHeader className="bg-green-50 border-b border-green-100">
      <div className="flex justify-between items-center">
        <div>
          <CardTitle className="text-lg text-green-800">
            {match.title}
          </CardTitle>
          <p className="text-sm text-green-600">{match.category}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-4">
      <div className="flex items-center justify-between mb-4">
        {match.matchPercentage !== undefined ? (
          <div className="w-20 h-20">
            <CircularProgressbar
              value={match.matchPercentage}
              text={`${match.matchPercentage}%`}
              styles={buildStyles({
                textSize: "22px",
                pathColor: `rgba(34, 197, 94, ${match.matchPercentage / 100})`,
                textColor: "#166534",
                trailColor: "#d1fae5",
              })}
            />
          </div>
        ) : (
          <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full">
            <Badge variant="secondary" className="bg-green-200 text-green-800">
              Match
            </Badge>
          </div>
        )}
        <div className="ml-4 flex-grow">
          <>
            <h4 className="text-sm font-semibold text-green-700 mb-1">
              Matched Attributes:
            </h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(match.matchedAttributes).map(
                ([key, value]) =>
                  value && (
                    <Badge key={key} variant="outline" className="">
                      {key}
                    </Badge>
                  )
              )}
              {match.matchedAttributes.skills &&
                match.matchedAttributes.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="">
                    {skill}
                  </Badge>
                ))}
            </div>
          </>
        </div>
      </div>
    </CardContent>
    <CardFooter className="bg-green-50 border-t py-2 border-green-100">
      <Button
        size="sm"
        className="ml-auto bg-green-600 hover:bg-green-700 text-white"
      >
        Contact {type === "Wish" ? "Offerer" : "Wisher"}
      </Button>
    </CardFooter>
  </Card>
);

const MatchesHeader = ({ selectedItem }) => (
  <div className="p-4 rounded-t-lg border-b-2  mb-4">
    <div className="flex flex-col gap-2 items-center">
      <h3 className="text-xl font-semibold text-green-800">
        Matches for:
        <span className="ml-2 text-green-600">{selectedItem.title}</span>
      </h3>
      <Badge
        variant="secondary"
        className="bg-green-200 text-green-800 text-sm px-3 py-1"
      >
        {selectedItem.matches.length}{" "}
        {selectedItem.matches.length === 1 ? "Match" : "Matches"}
      </Badge>
    </div>
  </div>
);

export const MatchColumn = ({ selectedItem, className }) => (
  <div className={`relative ${className}`}>
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-200 rounded-full px-6 py-2 z-10">
      <h2 className="font-semibold text-green-800">Matches</h2>
    </div>
    <div className="pt-8 max-h-[calc(100vh-200px)] overflow-y-auto">
      <CardContent>
        {selectedItem ? (
          <>
            <MatchesHeader selectedItem={selectedItem} />
            {selectedItem.matches.map((match) => (
              <MatchItem
                key={match.id}
                match={match}
                type={selectedItem.type}
              />
            ))}
          </>
        ) : (
          <p className="text-center text-gray-500">
            Select a wish or offer to see matches
          </p>
        )}
      </CardContent>
    </div>
  </div>
);
