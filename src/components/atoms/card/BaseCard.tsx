import { FC } from "react";

const BaseCard: FC = ({ children }) => {
  return <div className="shadow-md p-md">{children}</div>;
};

export default BaseCard;
