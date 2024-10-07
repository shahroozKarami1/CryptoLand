import { FC } from "react";
import { IDocsProps } from "../../Types/interfaces";
import { Link } from "react-router-dom";

const Docs: FC<IDocsProps> = ({ title }) => {
  return (
    <main>
      <Link to={"/"}>
        <div className="flex justify-center  items-center borderDocs rounded-md py-5  m-5 relative  activeDoc  ">
          <span className="text-lg font-bold   ">{title}</span>
          <img
            src="/public/Images/pdfTemplete.png"
            className="absolute -left-5"
            alt=""
          />
        </div>
      </Link>
    </main>
  );
};

export default Docs;
