"use client";

import type { HTMLAttributes, HTMLInputTypeAttribute } from "react";

import { cn } from "@/lib/utils";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea, type TextareaProps } from "@/components/ui/textarea";

type InputFieldProps = {
  form: any;
  name: string;
  label?: string;
  className?: string;
  inputClassName?: string;
  descriptionClassName?: string;
  description?: string;
  textareaProps: TextareaProps;
};
export default function TextAreaField(props: InputFieldProps) {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem className={cn(props.className)}>
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <FormControl>
            <Textarea {...field} className={cn(props.inputClassName)} {...props.textareaProps} />
          </FormControl>
          {!fieldState.error && props.description && (
            <FormDescription className={cn(props.descriptionClassName)}>{props.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
