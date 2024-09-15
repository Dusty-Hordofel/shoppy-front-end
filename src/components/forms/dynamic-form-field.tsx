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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FileInput from "./file-input";

interface Option {
  value: string;
  label: string;
  id: string;
}

// / Définir le type pour les propriétés de champ dynamique
type DynamicFormFieldProps = {
  inputType: "select" | "input" | "textarea" | "file";
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  form: any;
  name?: string;
  label?: string;
  description?: string;
  disabled?: boolean;
  options?: Option[];
  lines?: number;
  handleFileChange?: any;
  fileInputRef?: any;
  previewUrl?: any;
  //   disabled,
  field?: any;
};

const DynamicFormField = ({
  inputType,
  form,
  name,
  label,
  disabled,
  description,
  options,
  lines,
  handleFileChange,
  fileInputRef,
  previewUrl,
  //   disabled,
  field,
  ...props
}: DynamicFormFieldProps) => {
  switch (inputType) {
    case "textarea":
      return (
        <FormField
          control={form.control}
          name={name as string}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  {...props}
                  disabled={disabled}
                  rows={lines}
                />
              </FormControl>
              <FormDescription>{description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "select":
      return (
        <FormField
          control={form.control}
          name={name as string}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {options?.length &&
                    options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  {/* <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem> */}
                </SelectContent>
              </Select>
              <FormDescription>{description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    case "file":
      return (
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              {/* className="text-gray-500 font-light" */}
              <FormLabel>Picture</FormLabel>
              <FormControl>
                <FileInput
                  handleFileChange={handleFileChange}
                  fileInputRef={fileInputRef}
                  previewUrl={previewUrl}
                  disabled={disabled}
                  field={field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    //   <Select
    //   id={name}
    //   {...register(name)}
    //   defaultValue={defaultValue}
    // >
    //   {options.map(option => (
    //     <SelectItem key={option.value} value={option.value}>
    //       {option.label}
    //     </SelectItem>
    //   ))}

    case "input":
    default:
      return (
        <FormField
          control={form.control}
          name={name as string}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input {...field} {...props} disabled={disabled} />
              </FormControl>
              <FormDescription>{description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
  }
};

export default DynamicFormField;

export function AuthInput({ form, name, label, description, ...props }: any) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
