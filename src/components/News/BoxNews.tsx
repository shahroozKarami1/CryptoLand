import { FC } from "react";
import { IBoxNewsProps } from "../../Types/interfaces";

const BoxNews: FC<IBoxNewsProps> = ({ disc, id, logo }) => {
  return (
    <main>
      <div className="flex  flex-col gap-4     items-center justify-center sliderBox">
        <p className="    text-lg leading-relaxed  text-center text-textColorGray">{disc}</p>
        <img src={logo} alt=""  width={"40%"}  className="opacity-20" />
      </div> 
    </main>
  );
};

export default BoxNews;
