import * as yup from "yup";

export type PostType = "wish" | "offer";

export interface PostFormData {
  type: PostType;
  title: string;
  category: string;
  description: string;
  location: string;
}

export const postFormSchema = yup.object().shape({
  type: yup
    .mixed<PostType>()
    .oneOf(["wish", "offer"])
    .required("Please select a type"),
  title: yup
    .string()
    .required("Title is required")
    .max(100, "Title must be 100 characters or less"),
  category: yup.string().required("Category is required"),
  description: yup
    .string()
    .required("Description is required")
    .max(500, "Description must be 500 characters or less"),
  location: yup.string().required("Location is required"),
});

// types.ts
export interface Wish {
  id: string;
  userId: string;
  userName: string;
  title: string;
  description: string;
  category: string;
}

export interface Offer {
  id: string;
  userId: string;
  userName: string;
  title: string;
  description: string;
  category: string;
}

// mockData.ts

export const mockWishes: Wish[] = [
  {
    id: "1",
    userId: "user1",
    userName: "John Doe",
    title: "Looking for IT support",
    description: "Need help with network setup for small office",
    category: "IT Services",
  },
  {
    id: "2",
    userId: "user2",
    userName: "Jane Smith",
    title: "Seeking marketing consultant",
    description: "Require assistance with digital marketing strategy",
    category: "Marketing",
  },
  // Add more mock wishes as needed
];
