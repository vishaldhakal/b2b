import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MultiStepForm } from "./multi-step-form/AttendDialog";
interface Event {
  id: number;
  title: string;
  thumbnail?: string;
  date: string;
  location: string;
  attendees: number;
  type: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Nepal Tech Summit 2024",
    thumbnail: "/13.png",
    date: "Aug 15, 2024",
    location: "Kathmandu",
    attendees: 500,
    type: "Technology",
  },
  {
    id: 2,
    title: "Agricultural Innovation Expo",
    date: "Sep 5, 2024",
    thumbnail: "/13.png",
    location: "Pokhara",
    attendees: 300,
    type: "Agriculture",
  },
  {
    id: 3,
    title: "Himalayan Business Network Meet",
    date: "Oct 10, 2024",
    location: "Biratnagar",
    thumbnail: "/13.png",
    attendees: 200,
    type: "Networking",
  },
  {
    id: 4,
    title: "Sustainable Tourism Conference",
    date: "Nov 20, 2024",
    thumbnail: "/13.png",
    location: "Chitwan",
    attendees: 250,
    type: "Tourism",
  },
];
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  company: yup.string().required("Company name is required"),
  position: yup.string().required("Position is required"),
  phone: yup.string().required("Phone number is required"),
});

type FormData = yup.InferType<typeof schema>;

const AttendanceForm: React.FC<{ event: Event; onClose: () => void }> = ({
  event,
  onClose,
}) => {
  const form = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to your backend
    onClose();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Your company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Your position" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const EventList: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockEvents.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <Image
              src={event.thumbnail || "/placeholder.png"}
              className="max-w-100"
              alt="event thumbnail"
              width={600}
              height={600}
            />
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Users className="w-4 h-4 mr-2" />
              <span>{event.attendees} Attendees</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Badge variant="secondary">{event.type}</Badge>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => setSelectedEvent(event)}
                >
                  Attend this event
                </Button>
              </DialogTrigger>
              <DialogContent
                className="sm:max-w-2xl"
                onInteractOutside={(e) => {
                  e.preventDefault();
                }}
              >
                <DialogHeader>
                  <DialogTitle>
                    Attend Event: {selectedEvent?.title}
                  </DialogTitle>
                </DialogHeader>
                {selectedEvent && (
                  <MultiStepForm onClose={() => setSelectedEvent(null)} />
                )}
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
