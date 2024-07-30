import * as yup from "yup";

export interface Expert {
  id: number;
  name: string;
  expertise: string;
  rating: number;
  sessions: number;
}

export const expertSchema = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
  expertise: yup.string().required(),
  rating: yup.number().required().min(0).max(5),
  sessions: yup.number().required().positive().integer(),
});

export interface Session {
  id: number;
  title: string;
  expert: string;
  date: string;
  time: string;
  type: string;
}

export const sessionSchema = yup.object().shape({
  id: yup.number().required(),
  title: yup.string().required(),
  expert: yup.string().required(),
  date: yup.string().required(),
  time: yup.string().required(),
  type: yup.string().required(),
});
