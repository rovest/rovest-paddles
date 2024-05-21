"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon, UploadCloudIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

import type { ImageMimeType } from "@/types/mimeType";

import { cn } from "@/lib/utils";
import { heic2jpg } from "@/lib/image";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type InputFieldProps = {
  form: UseFormReturn<any>;
  name: string;
  label?: string;
  className?: string;
  inputClassName?: string;
  useDND?: boolean;
  type: "image" | "file";
  acceptTypes?: ImageMimeType[];
  defaultValue?: string;
  description?: string;
  imageClassName?: string;
  descriptionClassName?: string;
  readOnly?: boolean;
};
export default function InputFileField(props: InputFieldProps) {
  const [tmpFile, setTmpFile] = useState<string | undefined>(props.defaultValue || undefined);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    ...(props.type === "image" &&
      props.acceptTypes && {
        accept: {
          "image/*": props.acceptTypes.map((type) => `.${type.replace("image/", "")}`),
        },
      }),
    onDrop: async (files) => {
      const file = files[0];
      if (file.type === "image/heic") {
        const heicFileConvert = () =>
          new Promise<void>(async (resolve, reject) => {
            try {
              const heicFile = await heic2jpg(file);
              const convertedFileUrl = URL.createObjectURL(heicFile.blob);
              setTmpFile(convertedFileUrl);
              props.form.setValue(props.name, new File([heicFile.blob], heicFile.name, { type: "image/jpeg" }));
              resolve();
            } catch (error) {
              reject(new Error("Failed to convert heic file"));
            }
          });
        toast.promise(heicFileConvert, {
          loading: "heic 이미지를 jpg 포맷으로 변환중이에요",
          success: "heic 이미지가 jpg 포맷으로 변환되었어요 🙌",
          error: "heic 이미지를 jpg 포맷으로 변환하는데 실패했어요 😢",
        });
      } else {
        const blob = new Blob([file], { type: file.type });
        const blobUrl = URL.createObjectURL(blob);
        setTmpFile(blobUrl);
        props.form.setValue(props.name, file);
      }
    },
  });

  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem>
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <FormControl>
            <div
              className={cn(
                "relative mx-auto w-full h-[320px] border-dashed border-2 rounded",
                "hover:border-solid hover:cursor-pointer",
                isDragActive && "bg-primary/10",
                props.readOnly && "pointer-events-none",
                props.className
              )}
              // {...getRootProps()}
              {...(props.readOnly ? {} : getRootProps())}
            >
              {props.type === "image" && tmpFile && (
                <Image
                  className={cn("w-full h-full", props.imageClassName)}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  fill
                  sizes="100%"
                  alt="Attach File"
                  src={tmpFile}
                />
              )}
              {!tmpFile && (
                <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
                  <UploadCloudIcon size={48} className="text-foreground/80" />
                  <span className="text-sm text-center text-foreground/80">
                    여기에 파일을 끌어다 놓거나
                    <br />
                    클릭해서 파일을 선택해주세요
                  </span>
                </div>
              )}
              {props.readOnly !== true && (
                <div className="absolute bottom-4 right-2 bottom">
                  <Button className="gap-2" size="sm" type="button">
                    <ImageIcon width={18} className="text-sm text-foreground" />
                    <span className="text-sm text-foreground">업로드</span>
                  </Button>
                </div>
              )}
              <input
                className={cn(props.inputClassName)}
                type="file"
                {...getInputProps({ ...field })}
                // {...props.form.register(props.name)}
                value={undefined}
              />
            </div>
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
