import React from "react";

const Footer = () => {
  return (
    <main>
      <div className="container  p-xl">
        <div className="grid  grid-cols-12    items-center  justify-center">
          <div className="col-span-6">
            <div className="grid grid-cols-12   ">
              <div className="col-span-3   col-start-3 ">
                <ul className="flex  flex-col gap-4    text-gray-500    text-nowrap ">
                  <li>
                    <a href="">کاغذ سفید</a>
                  </li>
                  <li>
                    <a href="">مقاله فنی</a>
                  </li>
                  <li>
                    <a href="">خلاصه کسب و کار</a>
                  </li>
                  <li>
                    <a href="">منابع برند</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-3">
                <ul className="flex  flex-col gap-4    text-gray-500    text-nowrap">
                  <li>
                    <a href="">درباره ما</a>
                  </li>
                  <li>
                    <a href="">نقشه راه</a>
                  </li>
                  <li>
                    <a href="">توکن</a>
                  </li>
                  <li>
                    <a href="">تیم ما</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-3">
                <ul className="flex  flex-col gap-4    text-gray-500    text-nowrap">
                  <li>
                    <a href="">خدمات</a>
                  </li>
                  <li>
                    <a href="">استاتیک</a>
                  </li>
                  <li>
                    <a href="">کاغذهای سفید</a>
                  </li>
                  <li>
                    <a href="">سوالات متداول</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex    justify-around ">
              <div className="flex  flex-col  justify-start  gap-2">
                <span className="text-lg  text-gray-500">تهران جنت آباد</span>
                <span className="text-lg  text-gray-500">
                  shahroozdev@gmail.com
                </span>
                <span className="text-lg  text-gray-500">09305151712</span>
              </div>
              <img src="/public/Images/Logo.svg" width={"10%"} alt="" />
            </div>
          </div>
          <div className="col-span-12  ">
            <div className="flex  items-center justify-center mt-5">
                
            <span className="text-nowrap  text-textColorGray     ">
              تمامی حقوق برای این قالب محفوط است
            </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
