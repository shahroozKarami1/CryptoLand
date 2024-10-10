import React from "react";
import TitleSection from "../../assets/titleSection/TitleSection";

const Collebrations = () => {
  return (
    <main>
      <div className="container  p-xl">
        <TitleSection
          direction="right"
          isAfter={true}
          topic="دوستان ما"
          title="همکاران ما"
        />
        <div className="flex  items-center   justify-evenly">
          <img
            src="/public/Images/brandingImage/brand1.png"
            width={"12%"}
            className="opacity-20"
            alt=""
          />
          <img
            src="/public/Images/brandingImage/brand2.png"
            width={"12%"}
            className="opacity-20"
            alt=""
          />
          <img
            src="/public/Images/brandingImage/brand3.png"
            width={"12%"}
            className="opacity-20"
            alt=""
          />
          <img
            src="/public/Images/brandingImage/brand4.png"
            width={"12%"}
            className="opacity-20"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Collebrations;
