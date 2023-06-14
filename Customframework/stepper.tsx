import React, { useState } from "react";

interface Step {
  label: string;
  content: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="stepper">
      <div className="step-container">
        <div className="step-header">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-item ${activeStep === index ? "active" : ""}`}
            >
              {step.label}
            </div>
          ))}
        </div>
        <div className="step-content">{steps[activeStep].content}</div>
      </div>
      <div className="step-actions ">
        <button
          className={`step-button custom-button primary ${
            activeStep === 0 && "disable"
          }`}
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          &lt;
        </button>
        <button
          className={`step-button custom-button primary ${
            activeStep === steps.length - 1 && "disable"
          }`}
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Stepper;
