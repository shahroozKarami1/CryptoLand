const BrandSection = () => {
  return (
    <main className="lg:container lg:p-lg   xs:p-10 ">
      <div className="grid   grid-cols-12   justify-center   items-center">
        <div className=" xs:col-span-6  lg:col-span-2     lg:col-start-2">
          <img
            src="/public/Images/brandingImage/brand1.png"
            className="opacity-50  xs:my-5  lg:my-0"
            alt=""
          />
        </div>
        <div className="  xs:col-span-6 lg:col-span-2  ">
          <img
            src="/public/Images/brandingImage/brand2.png"
            className="opacity-50  xs:my-5  lg:my-0"
            alt=""
          />
        </div>
        <div className="xs:col-span-6  lg:col-span-2">
          <img
            src="/public/Images/brandingImage/brand3.png"
            className="opacity-50  xs:my-5  lg:my-0"
            alt=""
          />
        </div>
        <div className=" xs:col-span-6  lg:col-span-2">
          <img
            src="/public/Images/brandingImage/brand4.png"
            className="opacity-50  xs:my-5  lg:my-0"
            alt=""
          />
        </div>
        <div className="xs:col-span-12 mx-auto   lg:col-span-2">
          <img
            src="/public/Images/brandingImage/brand5.png"
            className="opacity-50  xs:my-5  lg:my-0"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default BrandSection;
