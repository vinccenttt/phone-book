import { useState } from "react";
import { PhoneArrowUpRightIcon as PhoneIconOutline } from "@heroicons/react/24/outline";
import { PhoneArrowUpRightIcon as PhoneIconSolid } from "@heroicons/react/24/solid";

export default function ContactCard({ name, phone }) {
    const [isHovered, setIsHovered] = useState(false);
    const foregroundColor = isHovered ? "dark-blue" : "dark-gray";
  
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-between w-full p-6 rounded-md bg-off-white md:shadow-md shadow border border-off-white hover:border-[#00254E]"
      >
        <div>
          <p className={`font-bold text-base mb-1 text-${foregroundColor}`}>
            {name}
          </p>
          <p className={`text-sm text-${foregroundColor}`}>Tel. {phone}</p>
        </div>
        <PhoneIcon isHovered={isHovered} color={foregroundColor} />
      </div>
    );
  }
  
  function PhoneIcon({ isHovered, color }) {
    const translation = isHovered ? "transform -translate-y-1 translate-x-1" : "";
    const styling = `h-6 w-6 text-${color} ${translation}`;
    return isHovered ? (
      <PhoneIconSolid className={styling} />
    ) : (
      <PhoneIconOutline className={styling} />
    );
  }