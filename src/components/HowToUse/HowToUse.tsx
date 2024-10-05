import React from "react";
import HowToUseDetails from "./HowToUseDetails";

function HowToUse() {
  return (
    <main  className="HowToUse">

      <div  className="flex  items-center  justify-center  flex-col  gap-5  pt-10">
        <span className="text-topicColor  text-lg">روند</span>
        <h1  className="text-textColor  text-4xl font-bold">چگونه کار  میکند ؟  </h1>
      </div>
    <div className="  flex   items-center  justify-evenly pt-4 ">
      <HowToUseDetails
        title="در حال پردازش"
        icon="/public//Images/HowToUse/pr-icon-1.svg"
      />
      <HowToUseDetails
        title="شناسایی"
        icon="/public//Images/HowToUse/pr-icon-2.svg"
      />
      <HowToUseDetails
        title="مبادله برای سایرین"
        icon="/public//Images/HowToUse/pr-icon-3.svg"
      />
      <HowToUseDetails
        title="نمودار تحلیلی"
        icon="/public//Images/HowToUse/pr-icon-4.svg"
      />
    </div>
    </main>

  );
}

export default HowToUse;
