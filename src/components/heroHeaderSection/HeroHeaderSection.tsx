export default function HeroHeaderSection() {
  return (
    <main className="hero_header--section">
      <div className="lg:container  lg:p-lg   xs:p-5 ">
        <div className="grid grid-cols-12 items-center justify-center">
          <div className=" xs:col-span-12  lg:col-span-5  lg:col-start-2 " data-aos="fade-up">
            <div className="flex flex-col  gap-2">
              <span className="text-textColor">کریپ تو لند</span>
              <div className="flex flex-col gap-4 mt-2">
                <h1 className="text-textColor font-extrabold text-5xl">
                  بلاکچین برای آینده
                </h1>
                <span className="text-textColor text-2xl">از فن آوری کسب و کار</span>
              </div>
              <p className="text-textColor mt-4 lg:w-3/4  leading-8">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </p>
              <div className="flex gap-2 mt-4   xs:flex-col  lg:flex-row  ">
                <input type="email" name="" id="" className="   lg:w-1/2  bg-inputColor rounded-sm placeholder:text-black placeholder:text-sm p-2" placeholder="ایمیل"/>
                <button className="bg-textColor p-2 px-3   text-BgColor  rounded-sm text-sm">به ما بپیوندید</button>
              </div>
            </div>
          </div>
          <div className=" xs:col-span-12  lg:col-span-5 ">
            <img
              className=" mx-auto  xs:hidden  lg:block"
              src="/public/Images/HeroHeader.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
