import { ReactElement, useState } from "react";

export const useMultiStepForm = (stepComponents: ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   console.log(stepComponents.length);
  function next() {
    setCurrentIndex((index) => {
      if (index >= stepComponents.length - 1) return index;
      return index + 1;
    });
  }

  function back() {
    setCurrentIndex((index) => {
      if (index === 0) return index;
      return index - 1;
    });
  }

  function goTo(index: number) {
    setCurrentIndex(index);
  }

  return {
    currentIndex,
    currentComponent: stepComponents[currentIndex],
    next,
    back,
    goTo,
    stepComponents,
    isFirstStep: currentIndex === 0,
    isLastIStep : currentIndex === stepComponents.length - 1
  };
};
