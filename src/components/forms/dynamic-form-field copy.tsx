import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@hookform/error-message";
import { Textarea } from "@/components/ui/textarea";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type InputType = "text" | "email" | "password" | "select" | "textarea";

interface Option {
  value: string;
  label: string;
  id: string;
}

type Props = {
  type?: InputType;
  inputType: "input" | "select" | "textarea";
  options?: Option[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
  form?: string;
  defaultValue?: string;
};

const FormFieldError = ({
  errors,
  name,
}: {
  errors: FieldErrors<FieldValues>;
  name: string;
}) => (
  <ErrorMessage
    errors={errors}
    name={name}
    render={({ message }) => (
      <p className="text-red-400 mt-2">
        {message === "Required" ? "This field is required" : message}
      </p>
    )}
  />
);

const DynamicFormField = ({
  errors,
  inputType,
  name,
  placeholder,
  defaultValue,
  register,
  type = "text",
  form,
  label,
  lines,
  options,
}: Props) => {
  const id = `input-${name}`;

  const renderInput = () => (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      form={form}
      defaultValue={defaultValue}
      {...register(name)}
    />
  );

  const renderSelect = () => (
    <select id={id} form={form} {...register(name)}>
      {options?.map((option) => (
        <option value={option.value} key={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  );

  const renderTextarea = () => (
    <Textarea
      id={id}
      placeholder={placeholder}
      {...register(name)}
      rows={lines}
      defaultValue={defaultValue}
    />
  );

  return (
    <Label className="flex flex-col gap-2" htmlFor={id}>
      {label && <span>{label}</span>}
      {inputType === "input" && renderInput()}
      {inputType === "select" && renderSelect()}
      {inputType === "textarea" && renderTextarea()}
      <FormFieldError errors={errors} name={name} />
      {/* <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-red-400 mt-2">
            {message === "Required" ? "" : message}
          </p>
        )}
      /> */}
    </Label>
  );
};

export default DynamicFormField;
