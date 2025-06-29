import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, SubmitHandler, DefaultValues } from "react-hook-form";
import { ZodType, TypeOf } from "zod";
import React from "react";

type GenericFormProps<TSchema extends ZodType<any, any, any>> = {
    schema: TSchema;
    onSubmit: (data: TypeOf<TSchema>) => void | Promise<void>;
    children: React.ReactNode;
    defaultValues?: DefaultValues<TypeOf<TSchema>>;
    fullHeight?: boolean;
    height?: string;
    formId?: string;
};

export function GenericForm<TSchema extends ZodType<any, any, any>>({
    schema,
    onSubmit,
    children,
    defaultValues,
    fullHeight = true,
    height,
    formId,
}: GenericFormProps<TSchema>) {
    const methods = useForm<TypeOf<TSchema>>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onValid: SubmitHandler<TypeOf<TSchema>> = (data) => {
        return onSubmit(data);
    };

    return (
        <FormProvider {...methods}>
            <form
                {...(formId ? { id: formId } : {})}
                onSubmit={(e) => {
                    e.preventDefault();
                    void methods.handleSubmit(onValid)(e);
                }}
                className={`space-y-0 ${fullHeight ? "h-full" : height ? height : ""}`}
            >
                {children}
            </form>
        </FormProvider>
    );
}
