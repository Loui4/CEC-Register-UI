import { FC } from "react";

type PropTypes = {
  name: string;
  hasError?: boolean;
  value: string | number;
  onChange: (e: any) => void;
};

const BaseFormInput: FC<PropTypes> = ({ name, hasError, value, onChange }) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      className={`border border-gray rounded-md py-md px-sm w-full focus:outline-none focus:bg-gray-l focus:ring-1 ${
        hasError ? "border-2 border-error focus:ring-2" : ""
      }`}
    />
  );
};

export default BaseFormInput;
