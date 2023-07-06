import { FC } from "react";

interface Paragraph {
  children: React.ReactNode;
}
export const Paragraph: FC<Paragraph> = ({ children }) => {
  return <div>{children}</div>;
};
