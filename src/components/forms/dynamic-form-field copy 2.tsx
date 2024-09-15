// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ErrorMessage } from "@hookform/error-message";
// import { Textarea } from "@/components/ui/textarea";
// import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// type InputType = "text" | "email" | "password" | "select" | "textarea";

// interface Option {
//   value: string;
//   label: string;
//   id: string;
// }

// type Props = {
//   type?: InputType;
//   inputType: "input" | "select" | "textarea";
//   options?: Option[];
//   label?: string;
//   placeholder: string;
//   register: UseFormRegister<any>;
//   name: string;
//   errors: FieldErrors<FieldValues>;
//   lines?: number;
//   form?: string;
//   defaultValue?: string;
// };

// const FormFieldError = ({
//   errors,
//   name,
// }: {
//   errors: FieldErrors<FieldValues>;
//   name: string;
// }) => (
//   <ErrorMessage
//     errors={errors}
//     name={name}
//     render={({ message }) => (
//       <p className="text-red-400 mt-2">
//         {message === "Required" ? "This field is required" : message}
//       </p>
//     )}
//   />
// );

// // type Option = {
// //   value: string;
// //   label: string;
// // };

// // type SelectFieldProps = {
// //   name: string;
// //   label?: string;
// //   options: Option[]; // Typage explicite ici
// //   register: UseFormRegister<any>;
// //   errors: FieldErrors<any>;
// //   defaultValue?: string;
// // };

// // type DynamicFormFieldProps = {
// //   type: "text" | "email" | "password";
// //   inputType: "select" | "input" | "textarea";
// //   options?: { value: string; label: string; id: string }[];
// //   form: any;
// //   name: string;
// //   label: string;
// //   description: string;
// // } & (
// //   | {
// //       inputType: "input";
// //       type: "text" | "email" | "password";
// //       props?: React.InputHTMLAttributes<HTMLInputElement>;
// //     } // Champs input
// //   | {
// //       inputType: "textarea";
// //       props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
// //     } // Champs textarea
// //   | {
// //       inputType: "select";
// //       options: Option[];
// //       props?: React.SelectHTMLAttributes<HTMLSelectElement>;
// //     }
// // ); // Champs select

// // type DynamicFormFieldProps = {
// //   //   type: "text" | "email" | "password" | "number";
// //   inputType: "select" | "input" | "textarea";
// //   placeholder: string;
// //   form: any;
// //   name: string;
// //   label: string;
// //   description?: string;
// //   disabled: boolean;
// // } & (
// //   | {
// //       inputType: "input";
// //       type: "text" | "email" | "password" | "number";
// //       props?: React.InputHTMLAttributes<HTMLInputElement>;
// //     }
// //   | {
// //       inputType: "textarea";
// //       props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
// //     }
// //   | {
// //       inputType: "select";
// //       options: Option[];
// //       props?: React.SelectHTMLAttributes<HTMLSelectElement>;
// //       //   options?: { value: string; label: string; id: string }[];
// //     }
// // );

// // / Définir le type pour les propriétés de champ dynamique
// type DynamicFormFieldProps = {
//   inputType: "select" | "input" | "textarea";
//   placeholder?: string;
//   form: any;
//   name: string;
//   label: string;
//   description?: string;
//   disabled?: boolean;
// } & (
//   | {
//       inputType: "input";
//       type: "text" | "email" | "password" | "number";
//       props?: React.InputHTMLAttributes<HTMLInputElement>;
//     }
//   | {
//       inputType: "textarea";
//       props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
//     }
//   | {
//       inputType: "select";
//       options: Option[];
//       props?: React.SelectHTMLAttributes<HTMLSelectElement>;
//     }
// );

// const DynamicFormField = ({
//   inputType,
//   form,
//   name,
//   label,
//   disabled,
//   description,
//   options,
//   ...props
// }: DynamicFormFieldProps) => {
//   switch (inputType) {
//     case "textarea":
//       return (
//         <FormField
//           control={form.control}
//           name={name}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>{label}</FormLabel>
//               <FormControl>
//                 <Textarea {...field} {...props} disabled={disabled} />
//               </FormControl>
//               <FormDescription>{description}</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       );
//     case "select":
//       return (
//         <FormField
//           control={form.control}
//           name={name}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>{label}</FormLabel>
//               <Select
//                 onValueChange={field.onChange}
//                 defaultValue={field.value}
//                 disabled={disabled}
//               >
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select a verified email to display" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   {options?.length &&
//                     options.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   {/* <SelectItem value="m@example.com">m@example.com</SelectItem>
//                   <SelectItem value="m@google.com">m@google.com</SelectItem>
//                   <SelectItem value="m@support.com">m@support.com</SelectItem> */}
//                 </SelectContent>
//               </Select>
//               <FormDescription>{description}</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       );

//     //   <Select
//     //   id={name}
//     //   {...register(name)}
//     //   defaultValue={defaultValue}
//     // >
//     //   {options.map(option => (
//     //     <SelectItem key={option.value} value={option.value}>
//     //       {option.label}
//     //     </SelectItem>
//     //   ))}

//     case "input":
//     default:
//       return (
//         <FormField
//           control={form.control}
//           name={name}
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>{label}</FormLabel>
//               <FormControl>
//                 <Input {...field} {...props} disabled={disabled} />
//               </FormControl>
//               <FormDescription>{description}</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       );
//   }
// };

// export default DynamicFormField;

// export function AuthInput({ form, name, label, description, ...props }: any) {
//   return (
//     <FormField
//       control={form.control}
//       name={name}
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>{label}</FormLabel>
//           <FormControl>
//             <Input {...field} {...props} />
//           </FormControl>
//           <FormDescription>{description}</FormDescription>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// }
