import { FC } from "react";

type PropTypes = {
  direction?: "col" | "row";
};
const FormFieldWrapper: FC<PropTypes> = ({ children, direction = "col" }) => {
  return <div className={`flex flex-col gap-1 w-full my-2`}>{children}</div>;
};

export default FormFieldWrapper;
