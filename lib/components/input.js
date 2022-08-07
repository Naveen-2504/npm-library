import React from "react";

const Input = ({
    name, 
    value,
    type,
    id,
    disabled,
    required
}) => {
  return <input name={name} value={value} type={type} id={id} disabled={disabled} required={required}  />;
};


export default Input