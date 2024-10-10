import { FC } from "react";
import { IConsltantsProps } from "../../Types/interfaces";

const Consltants: FC<IConsltantsProps> = ({
  name,
  cover,
  jobPosition,
  socialMediaIcon,
  delay,
}) => {
  return (
    <main>
      <div
        className="flex  flex-col  items-center"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="relative cover-bg-after">
          <img
            src={socialMediaIcon}
            className="absolute  w-1/5 right-3"
            alt=""
          />
          <img src={cover} className="rounded-full  " alt="" />
        </div>
        <div className="flex  flex-col  items-center  gap-2  mt-10">
          <span className="  text-lg">{name}</span>
          <span className="text-textColorGray">{jobPosition}</span>
        </div>
      </div>
    </main>
  );
};

export default Consltants;
