import YouTubeIcon from "@mui/icons-material/YouTube";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import LiseneseIcons from "./LiseneseIcons";
const Lisenese = () => {
  return (
    <main>
      <div className="HowToUse">
        <div className="flex  flex-col  items-center    gap-4">
          <div className="flex     gap-2">
            <input
              type="email"
              name=""
              id=""
              className="  bg-inputColor rounded-sm  
               h-full hover:bg-textColor transition-all  
                placeholder:text-textColorGray
                 placeholder:text-sm p-2"
              placeholder="ایمیل"
            />
            <button className="bg-textColor  text-BgColor  rounded-md  p-3 ">
              ارسال
            </button>
          </div>

          <ul className="flex  gap-4  items-center   mt-2">
            <LiseneseIcons icon={<YouTubeIcon />} />
            <LiseneseIcons icon={<CurrencyBitcoinIcon />} />
            <LiseneseIcons icon={<FacebookIcon />} />
            <LiseneseIcons icon={<XIcon />} />
            <LiseneseIcons icon={<TelegramIcon />} />
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Lisenese;
