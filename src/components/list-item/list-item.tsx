import React, { FC } from "react";
import { ReactComponent as Logo } from "../../assets/react.svg";

interface ListItem {
  children: React.ReactNode;
}
export const ListItem: FC<ListItem> = ({ children }) => {
  return (
    <div>
      <Logo></Logo>
      {children}
    </div>
  );
};
