import { FC } from "react";
import { FormOption } from "../../../interfaces";

type PropTypes = {
  options: FormOption[];
  hasError?: boolean;
  name: string;
  value: string | number;
  id: string;
};

const BaseFormSelect: FC<PropTypes> = ({
  options,
  hasError = false,
  value,
  name,
  id,
}) => {
  return (
    <select
      id={id}
      value={value}
      name={name}
      className={`form-select rounded focus:outline-none w-full ${
        hasError ? "border-2 border-error" : ""
      }`}
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default BaseFormSelect;
