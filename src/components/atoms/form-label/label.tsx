import { FC } from "react";

type PropTypes = {
  htmlFor: string;
  title: string;
};

const Label: FC<PropTypes> = ({ htmlFor, title }) => {
  return (
    <label form={htmlFor} className="uppercase text-gray-md tracking-wide">
      {title}
    </label>
  );
};

export default Label;
