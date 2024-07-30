import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";

const forumPosts = [
  { title: "Tips for dealing with this season's unusual rainfall?", replies: 23, lastPost: "2 hours ago" },
  { title: "Success story: My experience with vertical farming", replies: 45, lastPost: "1 day ago" },
];

export const CommunityForum: React.FC = () => (
  <Card className="mt-8">
    <CardHeader>
      <CardTitle>Farmer's Community Forum</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {forumPosts.map((post, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{post.replies} replies • Last post {post.lastPost}</p>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button>Join the Discussion</Button>
    </CardFooter>
  </Card>
);
