import { FC, useEffect, useState } from "react";
import { StatisticsProps } from "../../Types/interfaces";

const Statistics: FC<StatisticsProps> = ({ color, statistics, title }) => {
  const [count, setCount] = useState(0);
  function myCounterFunc() {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < statistics) {
          return prev + 1;
        } 
        else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 5);
  }
  const handleScroll = () => {
    if (window.scrollY > 0) {
      myCounterFunc();
    }
  };

  useEffect(() => {
    myCounterFunc();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [statistics]);

  return (
    <main>
      <div className="flex  items-center  flex-col   justify-evenly  gap-4   ">
        <h1  className="font-extrabold  text-lg">{title}</h1>
        <span
             className="font-extrabold  text-4xl  number"
          style={{
            color,
          }}
        >
          {count}
        </span>
      </div>
    </main>
  );
};
export default Statistics;
