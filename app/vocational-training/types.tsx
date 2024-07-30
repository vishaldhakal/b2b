import * as yup from 'yup';

export interface Course {
  id: number;
  title: string;
  duration: string;
  level: string;
  rating: number;
  enrolled: number;
}

export const courseSchema = yup.object().shape({
  id: yup.number().required(),
  title: yup.string().required(),
  duration: yup.string().required(),
  level: yup.string().required(),
  rating: yup.number().required().min(0).max(5),
  enrolled: yup.number().required().positive().integer(),
});

export interface UserCourseProgress {
  course: string;
  progress: number;
}

export const userCourseProgressSchema = yup.object().shape({
  course: yup.string().required(),
  progress: yup.number().required().min(0).max(100),
});
