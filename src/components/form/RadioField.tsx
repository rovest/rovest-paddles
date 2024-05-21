"use client";

import { Root as LabelPrimitiveRoot } from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type RadioItems = {
  value: string;
  label: string;
};

type RadioGroupFieldProps = {
  form: any;
  name: string;
  className?: string;
  items: RadioItems[];
  label?: React.ReactElement | string;
  labelProps?: React.ComponentPropsWithoutRef<typeof LabelPrimitiveRoot>;
  description: React.ReactElement | string;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
};
export default function RadioGroupField({ labelProps, descriptionProps, ...props }: RadioGroupFieldProps) {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem className="space-y-3">
          {props.label && <FormLabel {...labelProps}>{props.label}</FormLabel>}
          <FormControl>
            <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col space-y-1">
              {props.items.map((item, i) => (
                <FormItem key={`radio-group-${props.name}-${i}`} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={item.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
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
