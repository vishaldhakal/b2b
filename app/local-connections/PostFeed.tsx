import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "../../@/components/ui/card";
import { Avatar, AvatarFallback } from "../../@/components/ui/avatar";
import { Button } from "../../@/components/ui/button";
import { MapPin, ThumbsUp, MessageCircle, Share2, Send } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
}

const mockPosts: Post[] = [
  { id: 1, author: "Nepal Handicrafts Co.", content: "Excited to showcase our new line of handmade Pashmina shawls at the upcoming Kathmandu Trade Fair!", likes: 24, comments: 5, shares: 2 },
  { id: 2, author: "Himalayan Organic Farms", content: "We're hiring! Looking for experienced agricultural experts to join our team in Pokhara. DM for details.", likes: 18, comments: 7, shares: 4 },
];

export const PostFeed: React.FC = () => {
  return (
    <>
      {mockPosts.map(post => (
        <Card key={post.id} className="mb-4">
          <CardHeader className="flex items-center">
            <Avatar className="w-12 h-12 mr-4">
              <AvatarFallback>{post.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold">{post.author}</h3>
              <p className="text-gray-600 text-sm">Posted 2h ago • <MapPin className="w-4 h-4 inline" /> Kathmandu, Nepal</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between text-gray-500 border-t pt-2">
            <Button variant="ghost" className="flex items-center">
              <ThumbsUp className="w-5 h-5 mr-1" /> Like ({post.likes})
            </Button>
            <Button variant="ghost" className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-1" /> Comment ({post.comments})
            </Button>
            <Button variant="ghost" className="flex items-center">
              <Share2 className="w-5 h-5 mr-1" /> Share ({post.shares})
            </Button>
            <Button variant="ghost" className="flex items-center">
              <Send className="w-5 h-5 mr-1" /> Send
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
