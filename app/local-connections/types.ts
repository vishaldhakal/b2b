import * as yup from "yup";

// Post
export interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  location: string;
}

export const postSchema = yup.object().shape({
  id: yup.number().required(),
  author: yup.string().required(),
  content: yup.string().required(),
  likes: yup.number().required().min(0),
  comments: yup.number().required().min(0),
  shares: yup.number().required().min(0),
  timestamp: yup.string().required(),
  location: yup.string().required(),
});

// Connection Suggestion
export interface ConnectionSuggestion {
  id: number;
  name: string;
  mutual: number;
}

export const connectionSuggestionSchema = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
  mutual: yup.number().required().min(0),
});

// Event
export interface Event {
  name: string;
  date: string;
  location: string;
}

export const eventSchema = yup.object().shape({
  name: yup.string().required(),
  date: yup.string().required(),
  location: yup.string().required(),
});

// Profile Summary
export interface ProfileSummary {
  businessName: string;
  tagline: string;
  connections: number;
  location: string;
  profileViews: number;
  postImpressions: number;
  searchAppearances: number;
}

export const profileSummarySchema = yup.object().shape({
  businessName: yup.string().required(),
  tagline: yup.string().required(),
  connections: yup.number().required().min(0),
  location: yup.string().required(),
  profileViews: yup.number().required().min(0),
  postImpressions: yup.number().required().min(0),
  searchAppearances: yup.number().required().min(0),
});

// Create Post Form
export interface CreatePostForm {
  content: string;
  mediaType?: "photo" | "video" | "event" | "article";
}

export const createPostFormSchema = yup.object().shape({
  content: yup
    .string()
    .required("Post content is required")
    .max(500, "Post content must be 500 characters or less"),
  mediaType: yup.mixed().oneOf(["photo", "video", "event", "article"]),
});

// Search Form
export interface SearchForm {
  query: string;
}

export const searchFormSchema = yup.object().shape({
  query: yup.string().required("Search query is required"),
});
