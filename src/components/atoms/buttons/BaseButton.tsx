import { FC } from "react";

type PropTypes = {
  title: string;
  onClick?: () => void;
  color: "primary" | "secondary";
  type?: "submit" | "reset";
};

const BaseButton: FC<PropTypes> = ({ title, onClick, color, type }) => {
  return (
    <button
      className={`bg-primary py-2 px-4 uppercase text-btnText-primary`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default BaseButton;
