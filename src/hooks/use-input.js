import { useReducer } from "react";

const initialStae = {
  value: "",
  isTouched: false,
};

const inputStaeReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return initialStae;
  }
  return initialStae;
};

const useInput = (valiDateValue) => {
  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);
  const [inputState, dispatch] = useReducer(inputStaeReducer, initialStae);

  const valueChangeHandler = (event) => {
    if (inputState.isTouched === false) {
      //   setIsTouched(true);
      dispatch({ type: "BLUR" });
    }
    // setEnteredValue(event.target.value);
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    // setIsTouched(true);
    dispatch({ type: "BLUR" });
  };

  //   const valueIsValid = valiDateValue(enteredValue);
  //   const hasError = !valueIsValid && isTouched;
  const valueIsValid = valiDateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const reset = () => {
    // setEnteredValue("");
    // setIsTouched(false);
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
