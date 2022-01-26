import { useState } from "react";

const useInput = (valiDateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (event) => {
    if (isTouched === false) {
      setIsTouched(true);
    }
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const valueIsValid = valiDateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
