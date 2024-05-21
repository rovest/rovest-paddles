"use client";

import { Root as LabelPrimitiveRoot } from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SelectBoxOption = {
  value: string;
  label: string;
};

type SelectBoxFieldProps = {
  form: any;
  name: string;
  className?: string;
  options: SelectBoxOption[];
  label?: React.ReactElement | string;
  labelProps?: React.ComponentPropsWithoutRef<typeof LabelPrimitiveRoot>;
  placeholder: string;
  description: React.ReactElement | string;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
};
export default function SelectBoxField({ labelProps, descriptionProps, ...props }: SelectBoxFieldProps) {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem className={cn(props.className)}>
          {props.label && <FormLabel {...labelProps}>{props.label}</FormLabel>}
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {props.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {!fieldState.error && props.description && (
            <FormDescription {...descriptionProps}>{props.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
