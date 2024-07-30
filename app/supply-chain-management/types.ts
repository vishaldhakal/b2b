import * as yup from "yup";

export interface SupplyChainStage {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

export const supplyChainStageSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  color: yup.string().required(),
});

export interface Connection {
  stage: string;
  name: string;
  role: string;
}

export const connectionSchema = yup.object().shape({
  stage: yup.string().required(),
  name: yup.string().required(),
  role: yup.string().required(),
});
