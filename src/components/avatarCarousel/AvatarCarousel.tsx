import React, { useState, SetStateAction, Dispatch } from "react";
import { Image, Skeleton } from "@heroui/react";
import { Icon } from "@iconify/react";
import { RandomUserProps } from "@/interfaces/RandomUserProps";
import { useRandomUsers } from "@/hook/useRandomUser";
import { inter } from "@/config/fonts";

interface AvatarCarouselProps {
    setSelectedcontact: Dispatch<SetStateAction<RandomUserProps | undefined>>;
}

const AvatarCarousel = ({ setSelectedcontact }: AvatarCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { data, isLoading } = useRandomUsers(20);

    const itemsPerView = 3;

    if (isLoading || !data) {
        return (
            <div>
                <div className="p-6">
                    <div className="flex items-center justify-center w-full">
                        <div className="mx-10 w-60">
                            <div className="flex justify-center items-center space-x-4">
                                {[...Array(itemsPerView)].map((_, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-10 h-10 mx-auto rounded-full overflow-hidden ring-2 ring-gray-200 shadow-sm">
                                            <Skeleton className="w-full h-full rounded-full" />
                                        </div>
                                        <Skeleton className="w-16 h-4 mt-2 mx-auto rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <Icon
                            className="cursor-pointer opacity-50"
                            fontSize={20}
                            icon="bx:left-arrow-alt"
                        />
                        <Icon
                            className="cursor-pointer opacity-50"
                            fontSize={20}
                            icon="bx:right-arrow-alt"
                        />
                    </div>
                </div>
            </div>
        );
    }

    const maxIndex = Math.max(0, data.results.length - itemsPerView);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const redirectToSendAgainPage = (item: RandomUserProps) => {
        setSelectedcontact(item);
    };

    return (
        <div>
            <div className="p-6">
                <div className="flex items-center justify-center w-full">
                    <div className="mx-10 w-60">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                }}
                            >
                                {data.results.map((item) => (
                                    <div
                                        key={item.login.uuid}
                                        className="flex-shrink-0"
                                        style={{ width: `${100 / itemsPerView}%` }}
                                    >
                                        <div className="group cursor-pointer text-center px-2">
                                            <div className="mb-2">
                                                <div className="w-10 h-10 mt-2 mx-auto rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-emerald-400 transition-all duration-300 group-hover:scale-105 shadow-sm">
                                                    <Image
                                                        onClick={() =>
                                                            redirectToSendAgainPage(item)
                                                        }
                                                        src={item.picture.medium}
                                                        alt={item.name.first}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <h3
                                                    className={`${inter.className} text-sm font-light text-gray-800 group-hover:text-emerald-500 transition-colors duration-200`}
                                                >
                                                    {item.name.first}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <Icon
                        className="cursor-pointer"
                        onClick={goToPrevious}
                        fontSize={20}
                        icon="bx:left-arrow-alt"
                    />
                    <Icon
                        className="cursor-pointer"
                        onClick={goToNext}
                        fontSize={20}
                        icon="bx:right-arrow-alt"
                    />
                </div>
            </div>
        </div>
    );
};

export default AvatarCarousel;
