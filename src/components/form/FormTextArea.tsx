import { Controller, useFormContext } from "react-hook-form";
import { Textarea } from "@heroui/react";
import { inter } from "@/config/fonts";
import { RadiusType } from "@/utils/RadiusType";

type FormTextAreaProps = {
    name: string;
    label?: string;
    placeholder?: string;
    testId?: string;
    wrapperHeight?: string;
    className?: string;
    classNames?: any;
    radius?: RadiusType;
    isRequired?: boolean;
    readonly?: boolean;
};

export const FormTextArea = ({
    name,
    label,
    testId,
    wrapperHeight = "min-h-[133px]",
    className,
    radius,
    isRequired = false,
    readonly = false,
}: FormTextAreaProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const error = errors[name]?.message as string | undefined;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <div className={`${wrapperHeight} w-full`}>
                    <Textarea
                        readOnly={readonly}
                        isRequired={isRequired}
                        id={name}
                        value={field.value || ""}
                        onChange={field.onChange}
                        data-testid={testId}
                        className={className}
                        label={label}
                        variant="bordered"
                        name={field.name}
                        radius={radius}
                        classNames={{
                            label: `${inter.className} group-data-[has-value=true]:text-colorDefault-50 group-data-[filled-within=true]:scale-88 group-data-[filled-within=true]:-top-[20px] bg-white`,
                            inputWrapper: `${inter.className} py-2 data-[hover=true]:border-gray-400 group-data-[focus=true]:border-grey-400`,
                            input: `${inter.className} text-colorDefault-50`,
                        }}
                        size="sm"
                        errorMessage={error}
                        isInvalid={!!error}
                    />
                </div>
            )}
        />
    );
};
