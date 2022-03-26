import { FC } from "react";

type PropTypes = {
  name: string;
  hasError?: boolean;
  value: string | number;
  onChange: (e: any) => void;
  type?: "date" | "text";
};

const BaseFormInput: FC<PropTypes> = ({
  name,
  hasError,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      className={`border border-gray rounded-md py-md px-sm w-full focus:outline-none focus:bg-gray-l focus:ring-1 ${
        hasError ? "border-2 border-error focus:ring-2" : ""
      }`}
    />
  );
};

export default BaseFormInput;
