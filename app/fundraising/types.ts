import * as yup from "yup";

// Investment Opportunity
export interface InvestmentOpportunity {
  id: number;
  name: string;
  industry: string;
  location: string;
  fundingGoal: number;
  raised: number;
  investors: number;
  daysLeft: number;
}

export const investmentOpportunitySchema = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
  industry: yup.string().required(),
  location: yup.string().required(),
  fundingGoal: yup.number().required().positive(),
  raised: yup.number().required().min(0),
  investors: yup.number().required().positive().integer(),
  daysLeft: yup.number().required().positive().integer(),
});

// Investment
export interface Investment {
  id: number;
  name: string;
  industry: string;
  invested: number;
  currentValue: number;
  returnPercentage: number;
}

export const investmentSchema = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
  industry: yup.string().required(),
  invested: yup.number().required().positive(),
  currentValue: yup.number().required().positive(),
  returnPercentage: yup.number().required(),
});

// Raise Funds Form
export interface RaiseFundsForm {
  businessName: string;
  industry: string;
  fundingGoal: number;
  campaignDuration: number;
  businessDescription: string;
}

export const raiseFundsFormSchema = yup.object().shape({
  businessName: yup.string().required("Business name is required"),
  industry: yup.string().required("Industry is required"),
  fundingGoal: yup
    .number()
    .required("Funding goal is required")
    .positive("Funding goal must be positive"),
  campaignDuration: yup
    .number()
    .required("Campaign duration is required")
    .positive("Duration must be positive")
    .integer("Duration must be a whole number"),
  businessDescription: yup
    .string()
    .required("Business description is required")
    .min(50, "Description must be at least 50 characters"),
});

// Tab Navigation
export type TabType = "opportunities" | "yourInvestments" | "raiseFunds";

// Investment Tips
export interface InvestmentTip {
  id: number;
  content: string;
}

export const investmentTipSchema = yup.object().shape({
  id: yup.number().required(),
  content: yup.string().required(),
});
