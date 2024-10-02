import { FC } from "react";
import { TopicBoxProps } from "../../Types/interfaces";

const TopicBox: FC<TopicBoxProps> = ({ children, title, topic, disc }) => {
  return (
    <main>
      <div className="flex  flex-col   topicBox ">
        <span className="text-topicColor font-bold topic-styles__before relative mr-12">
          {topic}
        </span>
        <h1 className="text-titleColor font-extrabold leading-relaxed text-4xl  pb-10 pt-2">
          {title}
        </h1>
        <p className="text-textColorGray leading-8 ">{disc}</p>
        <div>{children}</div>
      </div>
    </main>
  );
};

export default TopicBox;
