import HeartChart from "./HeartChart";

const ChartMe = () => {
  return (
    <main className="lg:container   lg:p-xl   p-5">
      <div className="grid-cols-12 grid    ">
        <div className="lg:col-span-10  xs:col-span-12   lg:col-start-2  ">
          <div
            style={{
              padding: "7px",
              background: `var(--base-gradient-color)`,
            }}
          >
            <div  className=" bg-textColor">
              
            <div className="flex  items-center  justify-center  flex-col  gap-5      p-10">
              <h1 className="font-bold  text-3xl  text-titleColor  mb-8">
                ICO باز !
              </h1>
    
            </div>
              <HeartChart />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChartMe;
