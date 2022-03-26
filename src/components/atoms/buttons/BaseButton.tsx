import { FC } from "react";

type PropTypes = {
  title: string;
  onClick: () => void;
  color: "primary" | "secondary";
};

const BaseButton: FC<PropTypes> = ({ title, onClick, color }) => {
  return (
    <button
      className={`bg-primary py-2 px-4 uppercase text-btnText-primary`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BaseButton;
