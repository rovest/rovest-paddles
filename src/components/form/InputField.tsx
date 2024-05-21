"use client";

import { useState, type HTMLAttributes, type HTMLInputTypeAttribute, useEffect } from "react";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

type InputFieldProps = {
  form: any;
  name: string;
  inputProps: InputProps;
  label?: React.ReactElement | string;
  className?: string;
  labelClassName?: string;
  inputWrapClassName?: string;
  description?: string;
  descriptionClassName?: string;
  useToggleVisibility?: boolean;
};
export default function InputField(props: InputFieldProps) {
  const { type, ...restInputProps } = props.inputProps;
  const [inputType, setInputType] = useState(type || "text");
  const [toggleVisibility, setToggleVisibility] = useState(false);

  useEffect(() => {
    if (props.useToggleVisibility) {
      setInputType(toggleVisibility ? "text" : "password");
    }
  }, [props.useToggleVisibility, toggleVisibility]);
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem className={cn(props.className)}>
          {props.label && <FormLabel className={cn(props.labelClassName)}>{props.label}</FormLabel>}
          <FormControl>
            {props.useToggleVisibility ? (
              <div className={cn("relative", props.inputWrapClassName)}>
                <Input type={inputType} {...field} {...(restInputProps && { ...restInputProps })} />
                <div className="absolute top-1 right-1">
                  {toggleVisibility ? (
                    <Button size="xs" variant="ghost" type="button" onClick={() => setToggleVisibility(false)}>
                      <EyeIcon size={18} />
                    </Button>
                  ) : (
                    <Button size="xs" variant="ghost" type="button" onClick={() => setToggleVisibility(true)}>
                      <EyeOffIcon size={18} />
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <Input type={inputType} {...field} {...(restInputProps && { ...restInputProps })} />
            )}
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
