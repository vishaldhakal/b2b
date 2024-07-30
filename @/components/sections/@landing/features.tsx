import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Globe,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Sprout,
  Users,
  Search,
  DollarSign,
  Briefcase as JobIcon,
} from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon, slug }) => (
  <Link
    href={`/${slug}`}
    className="block hover:shadow-lg transition-shadow duration-300"
  >
    <Card>
      <CardHeader>
        <Icon className="h-8 w-8 text-blue-600 mb-2" />
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

const createSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

const features = [
  {
    title: "B2B Bazaar",
    description: "Network and attend business events",
    icon: Globe,
  },
  {
    title: "Supply Chain Management",
    description: "Streamline your operations",
    icon: TrendingUp,
  },
  {
    title: "Business Clinic",
    description: "Get expert advice and coaching",
    icon: Briefcase,
  },
  {
    title: "Vocational Training",
    description: "Enhance your skills",
    icon: GraduationCap,
  },
  {
    title: "Agricultural Training",
    description: "Learn modern farming techniques",
    icon: Sprout,
  },
  {
    title: "Local Connections",
    description: "Connect with businesses in your area",
    icon: Users,
  },
  {
    title: "Wish and Offers",
    description: "Find what you need or offer your services",
    icon: Search,
  },
  {
    title: "Fundraising",
    description: "Seek investments for your business",
    icon: DollarSign,
  },
  {
    title: "Job Board",
    description: "Find talent or your next opportunity",
    icon: JobIcon,
  },
];

const FeaturesSection = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold mb-8">Our Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          slug={createSlug(feature.title)}
        />
      ))}
    </div>
  </section>
);

export default FeaturesSection;
