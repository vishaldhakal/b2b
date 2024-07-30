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
