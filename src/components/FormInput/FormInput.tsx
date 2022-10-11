import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import AccountInput from "./AccountInput";
import AddressInput from "./AddressInput";
import UserInput from "./UserInput";

const FormInput = () => {
  const { currentIndex, currentComponent, next, back, goTo, stepComponents } =
    useMultiStepForm([<UserInput />, <AddressInput />, <AccountInput />]);

  console.log(currentIndex);
  return (
    <form className="flex flex-col">
      <div className="font-bold text-xs flex py-2 px-4 bg-indigo-700 text-white w-max rounded-md gap-1">
        <p>{currentIndex + 1}</p>
        <span>/</span>
        <p>{stepComponents.length}</p>
      </div>

      {currentComponent}
      <div className="flex gap-4 mt-4 justify-end">
        <button
          onClick={() => back()}
          type="button"
          className="button_type_style"
        >
          Back
        </button>
        <button
          onClick={() => next()}
          type="button"
          className="button_type_style"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default FormInput;
