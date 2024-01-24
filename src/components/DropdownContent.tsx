import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { DropdownContentProps } from "../types";

export const DropdownContent = ({ title, content }: DropdownContentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col">
      <div
        className="w-full bg-primary rounded-xl px-4 py-2 sm:text-xl text-lg text-white flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        {title}
        <ChevronDown className={`w-10 h-10 ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <div className="w-full h-[250px] bg-gray-200 rounded-b-lg px-4 pt-8 text-primary text-xl mt-[-10px] -z-10">
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};
