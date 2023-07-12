import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputText {
  children: React.ReactNode;
  id: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: FieldErrors<FieldValues>;
}
export const InputText: FC<InputText> = ({
  children,
  id,
  register,
  name,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-xs font-bold">
        <label htmlFor={id}>{children}</label>
        <div className="">
          <span className="text-errorMessage ">
            {errors && errors[name]?.type === "required" && (
              <>{errors[name]?.message}</>
            )}
          </span>
          <span className="text-errorMessage">
            {errors && errors[name]?.type === "pattern" && (
              <>{errors[name]?.message}</>
            )}
          </span>
        </div>
      </div>
      <input
        type="text"
        id={id}
        placeholder="email@company.com"
        aria-invalid={errors.email ? "true" : "false"}
        className={`border-2 border-[#a9a9a9] p-4 rounded-md ${
          errors.email ? "bg-errorBg text-error border-errorBorder" : ""
        }`}
        {...register(`${name}`, {
          required: "This field is required",
          pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Valid email required",
          },
        })}
      />
    </div>
  );
};
