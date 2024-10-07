import { FC } from "react";
import { IMainQuestionsProps } from "../../Types/interfaces";

const MainQuestions: FC<IMainQuestionsProps> = ({disc  ,  title}) => {
  return (
    <main>
      <div className="flex  flex-col  gap-4  mt-2  p-5    ">
        <h1 className="text-black font-bold   text-2xl">
            {title}
        </h1>
        <p className="text-textColorGray   leading-10  text-lg">
            {
                disc
            }
        </p>
      </div>
    </main>
  );
};

export default MainQuestions;
