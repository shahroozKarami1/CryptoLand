import { FC } from "react";
import IservicesSection from "../../Types/interfaces";

const ServicesSection: FC<IservicesSection> = ({
  color,
  desc,
  icon,
  title,
}) => {
  return (
    <div
      className="flex  flex-col  items-center     gap-6  rounded-md    p-5 "
      style={{ border: `4px  solid  ${color}` }}
    >
      <img src={icon} alt="" />
      <h2 className="font-bold  text-lg">{title}</h2>
      <p className="text-center text-textColorGray  leading-relaxed">
        {desc}{" "}
      </p>
      <button
        style={{ backgroundColor: `${color}` }}
        className="text-textColor  p-2 w-full  rounded-sm"
      >
        به ما بپیوندید
      </button>
    </div>
  );
};

export default ServicesSection;
