import React from "react";

function InputElement({ type, placeholder, name }) {
  return (
    // Input element with props type & name
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      autocomplete="off"
      required
    />
  );
}

export default InputElement;
