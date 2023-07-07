import { FC } from "react";

interface InputText {
  children: React.ReactNode;
  id: string;
}
export const InputText: FC<InputText> = ({ children, id }) => {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <label className="font-bold text-xs" htmlFor={id}>
          {children}
        </label>
      </div>
      <input
        type="text"
        id={id}
        placeholder="email@company.com"
        className="border-2 border-[#a9a9a9] p-4 rounded-md"
      />
    </div>
  );
};
