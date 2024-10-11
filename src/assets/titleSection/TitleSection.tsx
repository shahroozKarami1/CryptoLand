import { FC } from "react";
import { ITitleSectionProps } from "../../Types/interfaces";

const TitleSection: FC<ITitleSectionProps> = ({
  direction,
  isAfter,
  title,
  topic,
}) => {
  return (
    <main>
      <div
        className={`flex  flex-col     xs:m-5   lg:m-0  ${
          direction === "right" ? "justify-start  items-start" : "justify-center items-center"
        }   `}
      >
        <span className={`text-topicColor font-bold ${isAfter ? "topic-styles__before  relative  mr-12 " : ""  } `}>{topic}</span>
        <span className="text-titleColor font-extrabold leading-relaxed text-4xl  pb-10 pt-2">{title}</span>
      </div>
    </main>
  );
};

export default TitleSection;
