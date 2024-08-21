import React from "react";
import Image from "next/image";
import { Twitter } from "lucide-react";

import { Nerko_One } from "next/font/google";
// Import your SVG logo

const nekroOne = Nerko_One({
  weight: "400",
  subsets: ["latin"],
});
// Testimonial interface
interface Testimonial {
  name: string;
  username: string;
  avatar: string;
  content: string;
  hashtag?: string;
}

// Testimonial component
const Testimonial: React.FC<Testimonial> = ({
  name,
  username,
  avatar,
  content,
  hashtag,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Image
        src={avatar}
        alt={name}
        width={48}
        height={48}
        className="rounded-full mr-3"
      />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600">@{username}</p>
      </div>
      <Twitter className="ml-auto text-blue-400" size={20} />
    </div>
    <p className="text-gray-800 mb-2">{content}</p>
    {hashtag && <span className="text-blue-500">#{hashtag}</span>}
  </div>
);

// Dummy data
const testimonials: Testimonial[] = [
  {
    name: "Darrell Steward",
    username: "darrels",
    avatar: "https://i.pravatar.cc/300?img=1",
    content:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    hashtag: "another",
  },
  {
    name: "Leslie Alexander",
    username: "lesslie",
    avatar: "/path-to-avatar/leslie.jpg",
    content:
      "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
    hashtag: "Celebration",
  },
  {
    name: "Darrell Steward",
    username: "darrels",
    avatar: "/images/avatars/darrell-steward.jpg",
    content:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    hashtag: "another",
  },
  {
    name: "Leslie Alexander",
    username: "lesslie",
    avatar: "/images/avatars/leslie-alexander.jpg",
    content:
      "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
    hashtag: "Celebration",
  },
  {
    name: "Jenny Wilson",
    username: "jennywilson",
    avatar: "/images/avatars/jenny-wilson.jpg",
    content:
      "This is a top quality product. No need to think twice before making it live on web.",
    hashtag: "make_it_fast",
  },
  {
    name: "Kristin Watson",
    username: "kristinwatson2",
    avatar: "/images/avatars/kristin-watson.jpg",
    content:
      "YFinally, I've found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    hashtag: "Celebration",
  },
  {
    name: "Guy Hawkins",
    username: "jennywilson",
    avatar: "/images/avatars/guy-hawkins.jpg",
    content:
      "This is a top quality product. No need to think twice before making it live on web.",
    hashtag: "make_it_fast",
  },
  {
    name: "Marvin McKinney",
    username: "darrels",
    avatar: "/images/avatars/marvin-mckinney.jpg",
    content:
      "With Celebration, it's quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I'm all for the efficiency.",
    hashtag: "dev",
  },
  {
    name: "Annette Black",
    username: "darrels",
    avatar: "/images/avatars/annette-black.jpg",
    content:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    hashtag: "another",
  },
  {
    name: "Floyd Miles",
    username: "darrels",
    avatar: "/images/avatars/floyd-miles.jpg",
    content:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    hashtag: "Celebration",
  },
];

// Main component
const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Image
            src="./Logo.svg"
            alt="B2B Birat Bazaar"
            width={200}
            height={100}
          />
          <h2
            className={`text-4xl md:text-5xl  text-center text-green-500 mt-6 ${nekroOne.className}`}
          >
            SUCCESS STORIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
              avatar={`https://i.pravatar.cc/300?img=${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
