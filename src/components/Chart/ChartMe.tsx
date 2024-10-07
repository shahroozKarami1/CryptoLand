import HeartChart from "./HeartChart";

const ChartMe = () => {
  return (
    <main className="container   p-xl">
      <div className="grid-cols-12 grid    ">
        <div className="col-span-10  col-start-2  ">
          <div
            style={{
              padding: "7px",
              background: `var(--base-gradient-color)`,
            }}
          >
            <div className="flex  items-center  justify-center  flex-col  gap-5    bg-textColor   p-10">
              <h1 className="font-bold  text-3xl  text-titleColor  mb-8">
                ICO باز !
              </h1>
              <HeartChart />
    
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChartMe;
