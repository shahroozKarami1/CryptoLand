import { FC } from "react";
import { IAboutUs } from "../../Types/interfaces";

const AboutUs: FC<IAboutUs> = ({ img, reverse ,  component }) => {
  return (
    <main className="container p-xl">
      <div
        className={` items-center flex  justify-evenly ${
          reverse && "flex-row-reverse"
        }  `}
      >
        <div>
       {component}
        </div>
        <div>
          <img src={img} alt="" className="mx-auto" />
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
