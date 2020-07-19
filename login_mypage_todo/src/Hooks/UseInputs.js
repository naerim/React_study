import React, { useState } from "react";

const UseInputs = () => {
  const [value, setValue] = useState("");
  const Input = (e) => setValue(e.target.value);
  return [value, Input];
};

export default UseInputs;
