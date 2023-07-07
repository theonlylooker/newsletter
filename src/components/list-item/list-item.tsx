import React, { FC } from "react";
import { ReactComponent as Check } from "../../assets/icon-list.svg";

interface ListItem {
  children: React.ReactNode;
}
export const ListItem: FC<ListItem> = ({ children }) => {
  return (
    <div className="flex font-medium text-myPrimary items-start gap-5">
      <Check></Check>
      {children}
    </div>
  );
};
