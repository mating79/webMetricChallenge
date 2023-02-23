import { useState } from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({ target }: any) => {
    setValue(target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
