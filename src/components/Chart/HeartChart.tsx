import { LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
const HeartChart = () => {
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    backgroundColor: `var(--base-gradient-color)`,
    borderRadius: "0.5rem",
    height: "42px",
    marginBottom: "3rem ",
       
    transform: "rotateY(180deg)",
    "& .MuiLinearProgress-bar": {
      background: "var(--base-gradient-color)",
      borderRadius: "10px",
    },
  }));

  return (
    <main>
      <div className="heartChart">
        <BorderLinearProgress variant="determinate" value={50} />
        <div className="flex items-center   justify-between   xs:flex-col  lg:flex-row   lg:gap-0   xs:gap-5   pb-5  w-full">
          <div className="flex flex-col gap-4  items-center">
            <span className="text-sm text-topicColor">ICD پایان می یابد :</span>
            <span>EXPIRED</span>
          </div>
          <button className="bg-BgColor text-textColor  p-2  px-5 text-sm  rounded-md    ">
            ثبت نام در ICO
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeartChart;
