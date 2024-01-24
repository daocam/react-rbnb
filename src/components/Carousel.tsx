import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Carousel = ({ pictures }: { pictures: string[] | undefined }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (pictures && pictures.length > 0) {
      const newIndex =
        currentImageIndex >= pictures.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
    }
  };

  const prevImage = () => {
    if (pictures && pictures.length > 0) {
      const newIndex =
        currentImageIndex <= 0 ? pictures.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
    }
  };

  return (
    <div
      className="w-full sm:h-[420px] h-[300px] bg-primary rounded-xl flex items-center 
      justify-between text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${
          pictures && pictures.length > 0 ? pictures[currentImageIndex] : ""
        })`,
      }}
    >
      <ChevronLeft
        className="sm:w-20 w-12 sm:h-20 h-12 cursor-pointer z-10"
        onClick={prevImage}
      />
      <ChevronRight
        className="sm:w-20 w-12 sm:h-20 h-12 cursor-pointer z-10"
        onClick={nextImage}
      />
      <div className="absolute bottom-5 right-[50%] text-xl z-10">
        {currentImageIndex + 1}/{pictures?.length}
      </div>
      <div
        className="brightness-5 left-0 absolute w-full h-full rounded-xl bottom-0 z-1
      bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.4)]"
      ></div>
    </div>
  );
};

export default Carousel;
