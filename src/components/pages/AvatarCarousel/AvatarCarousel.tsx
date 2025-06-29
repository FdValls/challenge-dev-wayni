import React, { useState, useRef } from "react";
import { Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { RandomUserProps } from "@/interfaces/RandomUserProps";

interface AvatarCarouselProps {
    regularContacts: RandomUserProps[] | undefined;
}
const AvatarCarousel = ({ regularContacts }: AvatarCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const itemsPerView = 3; // Reducido para que quepa mejor
    if (!regularContacts) {
        return;
    }
    const maxIndex = Math.max(0, regularContacts.length - itemsPerView);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 text-center">Send Again</h2>
            <div className="p-6 ">
                <div className="flex items-center justify-center w-full ">
                    <div className="mx-10 w-60">
                        <div className="overflow-hidden">
                            <div
                                ref={carouselRef}
                                className="flex transition-transform duration-300 "
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                }}
                            >
                                {regularContacts?.map((item) => (
                                    <div
                                        key={item.login.uuid}
                                        className="flex-shrink-0"
                                        style={{ width: `${100 / itemsPerView}%` }}
                                    >
                                        <div className="group cursor-pointer text-center px-2">
                                            <div className="mb-2">
                                                <div className="w-10 h-10 mt-2 mx-auto rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-emerald-400 transition-all duration-300 group-hover:scale-105 shadow-sm">
                                                    <Image
                                                        src={item.picture.medium}
                                                        alt={item.name.first}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <h3 className="text-sm font-medium text-gray-800 group-hover:text-emerald-500 transition-colors duration-200">
                                                    {item?.name.first}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Icon
                        className="cursor-pointer"
                        onClick={() => goToPrevious()}
                        fontSize={20}
                        icon="bx:left-arrow-alt"
                    />
                    <Icon
                        className="cursor-pointer"
                        onClick={() => goToNext()}
                        fontSize={20}
                        icon="bx:right-arrow-alt"
                    />
                </div>
            </div>
        </div>
    );
};

export default AvatarCarousel;
