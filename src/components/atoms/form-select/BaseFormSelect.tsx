import { FC } from "react";
import { FormOption } from "../../../interfaces";

type PropTypes = {
  options: FormOption[];
  hasError?: boolean;
  name: string;
  value: string | number;
  id: string;
  onChange: (e: any) => void;
};

const BaseFormSelect: FC<PropTypes> = ({
  options,
  hasError = false,
  value,
  name,
  id,
  onChange,
}) => {
  return (
    <select
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      className={`form-select rounded focus:outline-none w-full ${
        hasError ? "border-2 border-error" : ""
      }`}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default BaseFormSelect;
