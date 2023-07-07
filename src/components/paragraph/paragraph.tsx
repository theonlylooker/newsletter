import { FC } from "react";

interface Paragraph {
  children: React.ReactNode;
}
export const Paragraph: FC<Paragraph> = ({ children }) => {
  return <div className="text-myPrimary font-medium">{children}</div>;
};
