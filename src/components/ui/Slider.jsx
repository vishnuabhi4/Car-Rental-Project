import { useEffect, useState } from "react";
import car1 from "../../assets/Screenshot 2025-06-24 004448 - Copy.png";
import car2 from "../../assets/Screenshot 2025-06-24 004448 - Copy.png";
import car3 from "../../assets/Screenshot 2025-06-24 004448 - Copy (2).png";
import car4 from "../../assets/Screenshot 2025-06-24 004448 - Copy (3).png";
import car5 from "../../assets/Don't think, just do_.jpeg";

const carImages = [
    car1, car2, car3, car4, car5
];

export default function CarSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % carImages.length);
        }, 5000); // 6 seconds

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <div className="p-4"> {/* Add padding around the glass container */}
            <div className="
                relative
                rounded-lg
                border-4
                border-opacity-50
                border-white
                backdrop-blur-md
                bg-white/10
                shadow-lg
                overflow-hidden
            ">
                <div className="w-full relative overflow-hidden rounded-none">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {carImages.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Car ${index + 1}`}
                                className="w-screen flex-shrink-0 object-cover h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
                            />
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {carImages.map((_, index) => (
                          //(_, index)  intentionally ignoring the first parameter of the callback function. which is currentElement.
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full ${
                                    index === currentIndex ? "bg-white" : "bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}