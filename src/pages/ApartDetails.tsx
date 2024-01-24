import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel.tsx";
import { DropdownContent } from "../components/DropdownContent.tsx";
import Pills from "../components/Pills.tsx";
import data from "../datas/aparts.json";
import { ApartProps } from "../types/index.ts";

const ApartDetails = () => {
  const allAparts: ApartProps[] = data;

  const { id }: { id?: string } = useParams();
  const [apart, setApart] = useState<ApartProps | undefined>(undefined);

  useEffect(() => {
    if (id && allAparts) {
      const getApart = allAparts.find((apart) => apart.id === id);
      setApart(getApart);
    }
  }, [id, allAparts]);

  const fullNameHost = apart?.host?.name;
  const [lastName, firstName] = fullNameHost
    ? fullNameHost.split(" ")
    : ["", ""];

  const ratingApart = Number(apart?.rating);
  const normalizeRating = Math.min(5, Math.max(0, ratingApart));
  const MAX_RATING = 5;

  const stars = Array.from({ length: MAX_RATING }, (_, index) => (
    <Star
      key={index}
      className={index < normalizeRating ? "text-primary" : "text-gray-700"}
    />
  ));

  return (
    <>
      <Carousel pictures={apart?.pictures} />
      <div className="py-6">
        <div className="text-primary sm:flex sm:justify-between ">
          <div className="py-4 sm:py-0">
            <h2 className="text-3xl">{apart?.title}</h2>
            <h3>{apart?.location}</h3>
            <div className="flex gap-2 mt-3">
              {apart?.tags.map((tag, index) => (
                <Pills key={index}>{tag}</Pills>
              ))}
            </div>
          </div>
          <div className="flex sm:flex-col flex-row-reverse sm:items-end justify-between">
            <div className="flex gap-3">
              <div className="text-end text-sm sm:text-lg">
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
              </div>
              <img
                className="sm:w-14 w-12 sm:h-14 h-12 rounded-full"
                src={apart?.host?.picture}
                alt={apart?.host?.name}
              />
            </div>
            <div className="flex justify-between pt-4">
              <div className="flex gap-2">{stars}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 gap-4">
        <DropdownContent title="Description" content={apart?.description} />
        <DropdownContent title="Équipements" content={apart?.equipments} />
      </div>
    </>
  );
};

export default ApartDetails;
