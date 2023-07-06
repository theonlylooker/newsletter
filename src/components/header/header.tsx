import { FC } from "react";

interface Header {
  children: React.ReactNode;
  size?: string;
}
export const Header: FC<Header> = ({ children, size }) => {
  switch (size) {
    case "lg":
      return (
        <div className="text-5xl font-semibold text-myPrimary">{children}</div>
      );
    default:
      return (
        <div className="text-base font-semibold text-myPrimary">{children}</div>
      );
  }
};
