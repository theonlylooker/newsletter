import { FC } from "react";

interface Button {
  children: React.ReactNode;
  size?: string;
}
export const Button: FC<Button> = ({ children, size }) => {
  switch (size) {
    case "large":
      return (
        <button
          type="submit"
          className="bg-myPrimary text-white px-12 py-4 rounded-md text-sm hover:shadow-orange hover:bg-gradient-to-r from-[#FE5475] via-[#FE5867] to-[#FE6741]"
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type="submit"
          className="bg-myPrimary text-white p-1 rounded-md text-sm hover:shadow-orange hover:bg-gradient-to-r from-[#FE5475] via-[#FE5867] to-[#FE6741] "
        >
          {children}
        </button>
      );
  }
};
