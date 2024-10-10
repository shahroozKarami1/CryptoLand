import { FC } from "react";
import { HowToUseDetailsProps } from "../../Types/interfaces";

const HowToUseDetails: FC<HowToUseDetailsProps> = ({ icon, title  ,  delay }) => {
  return (
    <main  className="py-10" data-aos="fade-left"   data-aos-delay={delay}>
      <div className="flex items-center  justify-around flex-col  gap-5    HowToUseDetails relative " >
        <img src={icon} alt="" />
        <span  className="text-textColor font-bold text-lg">{title}</span>
      </div>
    </main>
  );
};

export default HowToUseDetails;
