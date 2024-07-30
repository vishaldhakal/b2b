import * as yup from "yup";

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  type: string;
}

export const eventSchema = yup.object().shape({
  id: yup.number().required(),
  title: yup.string().required().min(3),
  date: yup.string().required(),
  location: yup.string().required(),
  attendees: yup.number().required().positive().integer(),
  type: yup.string().required(),
});

export interface SearchFilterForm {
  search: string;
  category: string;
}
