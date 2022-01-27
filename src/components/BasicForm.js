import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    valueIsValid: enteredFirstNameIsValid,
    hasError: firstNameIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    hasError: lastNameIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // if (enteredFirstName.trim() === "") {
    //   return;
    // }
    // if (enteredLastName.trim() === "") {
    //   return;
    // }
    // if (!enteredEmail.includes("@")) {
    //   return;
    // }
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmailInput();
  };

  const firstNameInputClasses = !firstNameIsInvalid
    ? "form-control"
    : "form-control invalid";

  const lasttNameInputClasses = !lastNameIsInvalid
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameIsInvalid && (
            <p className="error-text">First Name shouldn't be empty</p>
          )}
        </div>
        <div className={lasttNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Last Name shouldn't be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please type a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
