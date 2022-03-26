import { FC } from "react";

type PropTypes = {
  direction?: "col" | "row";
};
const FormFieldWrapper: FC<PropTypes> = ({ children, direction = "col" }) => {
  return (
    <div className={`flex flex-${direction} gap-1 w-full`}>{children}</div>
  );
};

export default FormFieldWrapper;
