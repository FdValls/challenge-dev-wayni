import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@heroui/input";
import { inter } from "@/config/fonts";
import { RadiusType } from "@/utils/RadiusType";

type FormInputProps = {
    name: string;
    label?: string;
    type?: string;
    wrapperHeight?: string;
    className?: string;
    radius?: RadiusType;
    isRequired?: boolean;
};

export const FormInput = ({
    name,
    label,
    type = "text",
    wrapperHeight = "min-h-20",
    className,
    radius,
    isRequired = false,
}: FormInputProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    // const watchedValue = useWatch({ name });

    const error = errors[name]?.message as string | undefined;

    return (
        <div className={`${wrapperHeight} w-full`}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        isRequired={isRequired}
                        id={name}
                        className={className}
                        label={label}
                        type={type}
                        variant="bordered"
                        radius={radius}
                        classNames={{
                            label: `${inter.className} z-0 group-data-[has-value=true]:text-colorDefault-50 group-data-[filled-within=true]:scale-88 group-data-[filled-within=true]:-top-[4px] bg-white`,
                            inputWrapper: `${inter.className} z-0 py-2 data-[hover=true]:border-gray-400 group-data-[focus=true]:border-grey-400`,
                            input: `${inter.className} z-0 text-colorDefault-50`,
                        }}
                        size="sm"
                        errorMessage={error}
                        isInvalid={!!error}
                    />
                )}
            />
        </div>
    );
};
