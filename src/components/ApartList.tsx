import { useEffect, useState } from "react";
import data from "../datas/aparts.json";
import { ApartProps } from "../types/index.ts";
import ApartCard from "./ApartCard.tsx";

const ApartList = () => {
  const [aparts, setAparts] = useState<ApartProps[]>([]);

  useEffect(() => {
    setAparts(data);
  }, []);

  return (
    <div className="w-full sm:bg-gray-200 bg-transparent rounded-xl my-8 grid sm:grid-cols-3 sm:gap-10 gap-7 sm:p-10 p-0">
      {aparts.map((apart) => (
        <ApartCard
          key={apart.id}
          id={apart.id}
          title={apart.title}
          cover={apart.cover}
        />
      ))}
    </div>
  );
};

export default ApartList;
