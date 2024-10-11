import { FC } from "react";
import { IAboutUs } from "../../Types/interfaces";

const AboutUs: FC<IAboutUs> = ({ img, reverse ,  component }) => {
  return (
    <main className="lg:container lg:p-xl    xs:p-10">
      <div
        className={` items-center flex  xs:flex-col   lg:flex-row    justify-evenly ${
          reverse && "lg:flex-row-reverse"
        }  `}
      >
        <div>
       {component}
        </div>
        <div>
          <img src={img}    className="xs:w-5/6 xs:my-10  lg:my-0   lg:w-full " />
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
