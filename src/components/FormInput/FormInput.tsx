import { FormEvent, useState } from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import AccountInput from "./AccountInput";
import AddressInput from "./AddressInput";
import UserInput from "./UserInput";

type InitialFormData = {
  firstName: string;
  lastName: string;
  age: number | string;
  street: string;
  city: string;
  state: string;
  zip: string | number;
  email: string;
  password: string;
};

const INITIAL_DATA: InitialFormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const FormInput = () => {
  const [formData, setFormData] = useState(INITIAL_DATA);

  const {
    currentIndex,
    currentComponent,
    next,
    back,
    goTo,
    stepComponents,
    isFirstStep,
    isLastIStep,
  } = useMultiStepForm([
    <UserInput {...formData} updateFields={updateFields} />,
    <AddressInput {...formData} updateFields={updateFields}/>,
    <AccountInput {...formData}  updateFields={updateFields} />,
  ]);

  console.log(formData);

  function updateFields(fields: Partial<InitialFormData>) {
    setFormData(prev => {
      return {...prev,...fields}
    })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="font-bold text-xs flex py-2 px-4 bg-indigo-700 text-white w-max rounded-md gap-1">
        <p>{currentIndex + 1}</p>
        <span>/</span>
        <p>{stepComponents.length}</p>
      </div>

      {currentComponent}

      <div className="flex gap-4 mt-4 justify-end">
        {!isFirstStep && (
          <button
            onClick={() => back()}
            type="button"
            className="button_type_style"
          >
            Back
          </button>
        )}

        <button type="submit" className="button_type_style">
          {isLastIStep ? "Submit" : "Next"}
        </button>
      </div>
    </form>
  );
};

export default FormInput;
