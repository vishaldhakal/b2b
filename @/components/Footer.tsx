import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { Separator } from "../../@/components/ui/separator";

const Footer = () => (
  <footer className="bg-gray-100 text-gray-800 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-500">
            Nepal Business Hub
          </h3>
          <p className="text-gray-600 text-sm">
            Connecting businesses, fostering growth, and promoting innovation
            across Nepal.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4 text-blue-500">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4 text-blue-500">Contact Us</h4>
          <address className="text-gray-600 text-sm not-italic">
            123 Business Street
            <br />
            Kathmandu, Nepal
            <br />
            Phone: +977 1 234 5678
            <br />
            Email:{" "}
            <a
              href="mailto:info@nepalbusinesshub.com"
              className="text-blue-500 hover:underline"
            >
              info@nepalbusinesshub.com
            </a>
          </address>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4 text-blue-500">Newsletter</h4>
          <p className="text-gray-600 text-sm mb-2">
            Stay updated with our latest news and events.
          </p>
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white border-gray-300 text-gray-800 placeholder-gray-400"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <Separator className="my-8 bg-gray-200" />
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-600 text-sm">
          &copy; 2024 Nepal Business Hub. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-500 hover:bg-blue-100"
          >
            <Facebook className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-500 hover:bg-blue-100"
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-500 hover:bg-blue-100"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-500 hover:bg-blue-100"
          >
            <Instagram className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
