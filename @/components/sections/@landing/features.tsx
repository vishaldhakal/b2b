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
  <Link href={`/${slug}`} className="block duration-300">
    <Card>
      <CardHeader>
        <Icon className="h-6 w-6 text-blue-600 mb-2" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-md">{title}</CardTitle>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
