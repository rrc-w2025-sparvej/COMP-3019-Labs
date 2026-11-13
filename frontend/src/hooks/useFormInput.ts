import { useState } from "react";

export function useFormInput(initialValue: string = "") {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const validate = (
    validationCallback: (value: string) => string
  ): boolean => {
    const validationMessage = validationCallback(value);

    setMessage(validationMessage);

    return validationMessage === "";
  };

  const reset = () => {
    setValue("");
    setMessage("");
  };

  return {
    value,
    setValue,
    message,
    setMessage,
    validate,
    reset,
  };
}