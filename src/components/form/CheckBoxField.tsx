"use client";

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

import { cn } from "@/lib/utils";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

type CheckBoxItem = {
  id: string;
  label: string;
};

type CheckBoxFieldProps = {
  form: any;
  name: string;
  label: string;
  items: readonly CheckBoxItem[];
  useGrid?: boolean;
  className?: string;
  description?: string;
};

export default function CheckBoxField({ useGrid = false, ...props }: CheckBoxFieldProps) {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={() => (
        <FormItem className={cn(props.className)}>
          {props.items.length > 1 && (
            <div className="mb-4">
              <FormLabel className="text-base">{props.label}</FormLabel>
              {props.description && <FormDescription>{props.description}</FormDescription>}
            </div>
          )}
          <div
            className={cn(
              useGrid ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2" : "space-y-2"
            )}
          >
            {props.items.map((item) => (
              <FormField
                key={item.id}
                control={props.form.control}
                name={props.name}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className={cn(
                        props.items.length === 1
                          ? "flex items-center space-x-3 space-y-0 rounded-md border p-4"
                          : "flex items-center space-x-3 space-y-0"
                      )}
                    >
                      <FormControl>
                        <Checkbox
                          className={cn(field.value?.includes(item.id) ? "border-primary" : "border-input")}
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(field.value?.filter((value: string) => value !== item.id));
                          }}
                        />
                      </FormControl>
                      {props.items.length === 1 ? (
                        <div className="space-y-1 leading-none">
                          <FormLabel className="cursor-pointer">{item.label}</FormLabel>
                          {props.description && <FormDescription>{props.description}</FormDescription>}
                        </div>
                      ) : (
                        <FormLabel className="font-normal cursor-pointer">{item.label}</FormLabel>
                      )}
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
