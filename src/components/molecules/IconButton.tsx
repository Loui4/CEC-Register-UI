import { FC } from "react";
import { BaseButton } from "../atoms";
import { Label } from "@mui/icons-material";

type PropTypes = {
  icon: any;
  color: "primary" | "secondary";
  className?: string;
  label?: string;
  onClick: () => void;
};

const IconButton: FC<PropTypes> = ({
  className,
  color,
  icon,
  onClick,
  label,
}) => {
  return (
    <BaseButton color={color} className={className} onClick={onClick}>
      {icon}
      {label}
    </BaseButton>
  );
};

export default IconButton;
