import { FC } from "react";
import { ISelectBox } from "../../Types/interfaces";

const SelectBox: FC<ISelectBox> = ({ data ,  isScroll }) => {
  return (
    <>
      <select className={`bg-transparent text-textColorGray ${ !isScroll &&  "text-white"}` }>
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
