import { useEffect, useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    if (enteredNameTouched === false) {
      setEnteredNameTouched(true);
    }
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
