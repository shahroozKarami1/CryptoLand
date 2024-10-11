import { FC, useEffect, useState } from "react";
import { ITeamWorkData } from "../../Types/interfaces";
import { getData } from "../../services/apiService";
import TitleSection from "../../assets/titleSection/TitleSection";


const MyTeam: FC = () => {
  const [dataTeamWork, setDataTeamWork] = useState<ITeamWorkData[]>([]);
  async function fetcherData() {
    try {
      let res = await getData("/TeamWork");
      setDataTeamWork(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetcherData();
  }, []);
  return (
    <main className="mt-10  ">
      <div className="HowToUse lg:px-5">
        <div className="lg:container  lg:p-xl    ">
            <TitleSection
              direction="right"
              isAfter={true}
              title="تیم عالی"
              topic="متخصصین ما"
            />
          <div className="grid  items-center  justify-center  grid-cols-12">
            {dataTeamWork.map(({ cover, id, name, workPosition   ,  delay }) => {
              return (
                <div className="lg:col-span-2  xs:col-span-6 md:col-span-4    mb-5" key={id}   data-aos =  "fade-up"   data-aos-delay  =  {delay}>
                  <div className="flex  flex-col  items-center ">
                    <img src={cover} alt="" width={"50%"} />
                    <div className="details  flex flex-col  items-center  gap-2  mt-4">
                      <span className="text-textColor  text-lg">{name}</span>
                      <span className="text-lg  text-jobPosColor ">
                        {workPosition}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyTeam;
