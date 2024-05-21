"use client";

import type { HTMLInputTypeAttribute } from "react";
import { cn } from "@/lib/utils";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type RadioGroupFieldProps = {
  form: any;
  name: string;
  label: string;
  groupItems: { label: string; value: string }[];
  className?: string;
  type?: HTMLInputTypeAttribute;
  description?: string;
  onDevelop?: boolean;
};

export default function RadioGroupField(props: RadioGroupFieldProps) {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem className={cn("space-y-3", props.className)}>
          <FormLabel className={cn("pt-4", props.onDevelop && "flex items-center gap-2")}>{props.label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-wrap items-center gap-3"
            >
              {props.groupItems.map((groupItem, i) => (
                <FormItem key={`${props.name}-radiogroup-${i}}`} className="flex items-center space-x-1 space-y-0">
                  <FormControl>
                    <RadioGroupItem
                      value={groupItem.value}
                      // className="border-secondary focus:border-primary peer-checked:border-primary"
                      className={cn(field.value === groupItem.value ? "border-primary" : "border-input")}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer">
                    <span>{groupItem.label}</span>
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          {!fieldState.error && props.description && <FormDescription>{props.description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
