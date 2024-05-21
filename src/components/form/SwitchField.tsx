"use client";

import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";

import { cn } from "@/lib/utils";

import { Switch } from "@/components/ui/switch";
import { useEffect } from "react";

type SwitchFieldProps = {
  form: any;
  name: string;
  label?: React.ReactElement | string;
  trueLabel?: string;
  falseLabel?: string;
  labelClassName?: string;
  description?: string;
  descriptionClassName?: string;
  readOnly?: boolean;
};

export default function SwitchField(props: SwitchFieldProps) {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
          <div className="space-y-0.5">
            {props.label && (
              <FormLabel className={cn("text-base cursor-pointer", props.labelClassName)}>
                {props.label}
                {props.trueLabel && field.value === true && <span className=""> - {props.trueLabel}</span>}
                {props.falseLabel && field.value === false && <span className=""> - {props.falseLabel}</span>}
              </FormLabel>
            )}
            {!fieldState.error && props.description && (
              <FormDescription className={cn(props.descriptionClassName)}>{props.description}</FormDescription>
            )}
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={props.readOnly ? undefined : field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
