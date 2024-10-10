import { useEffect, useState } from "react";
import { getData } from "../../services/apiService";
import { INavLink, ISelectoptions } from "../../Types/interfaces";
import { Link } from "react-router-dom";
import SelectBox from "../SelectBox/SelectBox";

const NavBar = () => {
  let [data, setMyData] = useState<INavLink[]>([]);
  let [isScroll, setIsScroll] = useState(false);
  const handlerScroll = () => {
    if (window.scrollY > 70) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    let fetcherData = async () => {
      try {
        let res = await getData("/NavbarLinks");
        setMyData(res);
      } catch (error) {
        console.log(error);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    fetcherData();
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  let selectOtionsData: ISelectoptions[] = [
    {
      id: 1,
      label: "FA",
    },
    {
      id: 2,
      label: "EN",
    },
    {
      id: 3,
      label: "AR",
    },
  ];

  return (
    <div
      className={`container mt-4 py-2 transition-all duration-500 ease-in-out     ${
        isScroll ? "sticky top-0 bg-white shadow-lg" : "absolute top-0 bg-transparent"
      } z-50`}
    >
      <div className="grid grid-cols-12  items-center">
        <div className="flex  items-center  col-span-2 gap-2 mr-4">
          <img
            className="w-1/6 "
            src={"../../../public/Images/Logo.svg"}
            alt=""
          />
          <span      className={`text-textColor text-md uppercase  text-lg ${
                    isScroll && " text-textColorGray"
                  }`}>shahroozLand</span>
        </div>
        <div className="menuItems col-span-8 ">
          <ul className=" flex flex-row items-center justify-center gap-7 ">
            {data.map((items) => {
              return (
                <li
                  key={items.id}
                  className={`text-textColor text-md ${
                    isScroll && " text-textColorGray"
                  }`}
                >
                  <Link to={items.link}>{items.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rightSection col-span-2 ">
          <div className="flex items-center0 gap-4">
            <SelectBox data={selectOtionsData} isScroll = {isScroll}/>
            <button className=" bg-BgColor text-textColor  p-1 rounded-md px-6 text-1xl">
              عضویت
            </button>
            <button
              className={`text-textColor text-md ${
                isScroll && " text-textColorGray"
              }`}
            >
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
