import { FC } from "react";
import { ISelectBox } from "../../Types/interfaces";

const SelectBox: FC<ISelectBox> = ({ data ,  isScroll }) => {
  return (
    <>
      <select className={`bg-transparent text-textColorGray ${ !isScroll &&  "lg:text-white    xs:text-textColorGray"}` }>
        {data.map((item) => {
          return (
            <option value="" key={item.id}>
              {item.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectBox;
