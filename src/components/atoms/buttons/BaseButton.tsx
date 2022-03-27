import { FC } from "react";

type PropTypes = {
  onClick?: () => void;
  color: "primary" | "secondary";
  type?: "submit" | "reset";
  className?: string;
};

const BaseButton: FC<PropTypes> = ({
  onClick,
  color,
  type,
  children,
  className,
}) => {
  return (
    <button
      className={`bg-${color} py-2 px-4 uppercase ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default BaseButton;
