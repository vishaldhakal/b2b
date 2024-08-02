import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../../../components/ui/button";
import { Form } from "../../../../components/ui/form";
import { PersonalInfoStep } from "./PersonalInfoStep";
import { CompanyInfoStep } from "./CompanyInfoStep";
import { ParticipationTypeStep } from "./ParticipationTypeStep";
import { WishOfferStep } from "./WishOfferStep";
import { Loader2, Mail } from "lucide-react";

const personalInfoSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

const companyInfoSchema = yup.object().shape({
  company: yup.string().required("Company name is required"),
  position: yup.string().required("Position is required"),
  companyPhone: yup.string().required("Company phone number is required"),
  companyEmail: yup
    .string()
    .email("Invalid email")
    .required("Company email is required"),
  companyAddress: yup.string().required("Company address is required"),
  companyDescription: yup.string().required("Company description is required"),
});

const participationTypeSchema = yup.object().shape({
  participationType: yup
    .string()
    .oneOf(["wish", "offer"])
    .required("Participation type is required"),
});

const wishOfferSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  category: yup.string().required("Category is required"),
  description: yup.string().required("Description is required"),
  location: yup.string().required("Location is required"),
});

// Combine all schemas
const schema = personalInfoSchema
  .concat(companyInfoSchema)
  .concat(participationTypeSchema)
  .concat(wishOfferSchema);

type FormData = yup.InferType<typeof schema>;

type ThankYouComponentProps = {
  onClose: () => void;
};
const ThankYouComponent = ({ onClose }: ThankYouComponentProps) => (
  <div className="text-center space-y-6 p-6">
    <h2 className="text-3xl font-bold">Thank You!</h2>
    <p className="text-lg">
      Your form has been submitted. You will be emailed with the confirmation.
    </p>
    <div className="relative w-24 h-24 mx-auto">
      <Mail className="w-24 h-24 text-blue-500 absolute animate-bounce" />
    </div>
    {/* onClose  */}

    <Button className="ml-auto flex " variant="destructive" onClick={onClose}>
      Close
    </Button>
  </div>
);

export const MultiStepForm: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    // onClose();
  };

  const steps = [
    {
      title: "Personal Information",
      component: PersonalInfoStep,
      schema: personalInfoSchema,
    },
    {
      title: "Company Information",
      component: CompanyInfoStep,
      schema: companyInfoSchema,
    },
    {
      title: "Participation Type",
      component: ParticipationTypeStep,
      schema: participationTypeSchema,
    },
    {
      title: "Wish/Offer Details",
      component: WishOfferStep,
      schema: wishOfferSchema,
    },
  ];

  const CurrentStep = steps[step].component;

  const validateStep = async () => {
    const currentSchema = steps[step].schema;
    const currentStepData = form.getValues();
    try {
      await currentSchema.validate(currentStepData, { abortEarly: false });
      return true;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => {
          form.setError(err.path as keyof FormData, {
            type: "manual",
            message: err.message,
          });
        });
      }
      return false;
    }
  };

  const handleNext = async () => {
    const isValid = await validateStep();
    if (isValid) {
      if (step < steps.length - 1) {
        setStep((s) => s + 1);
      } else {
        form.handleSubmit(onSubmit)();
      }
    }
  };

  if (isSubmitted) {
    return <ThankYouComponent onClose={onClose} />;
  }

  // useEffect(() => {
  //   if (step === steps.length - 1) {
  //     form.handleSubmit(onSubmit)();
  //   }
  // }, [step]);

  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 p-6">
        <h2 className="text-lg font-semibold">{steps[step].title}</h2>
        <CurrentStep form={form} />
        <div className="flex justify-between mt-6">
          {step > 0 && (
            <Button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Previous
            </Button>
          )}
          <Button
            type="button"
            onClick={handleNext}
            disabled={form.formState.isSubmitting}
            className={`${
              step < steps.length - 1
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-green-500 hover:bg-green-600"
            } text-white`}
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : step < steps.length - 1 ? (
              "Next"
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
