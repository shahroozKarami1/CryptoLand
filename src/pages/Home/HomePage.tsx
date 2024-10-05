import AboutUs from "../../components/aboutUs/AboutUs";
import BrandSection from "../../components/BrandSection/BrandSection";
import FabIcon from "../../components/FabIcon/FabIcon";
import HeroHeaderSection from "../../components/heroHeaderSection/HeroHeaderSection";
import HowToUse from "../../components/HowToUse/HowToUse";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import TopicBox from "../../components/TopicBox/TopicBox";

const HomePage = () => {
  return (
    <div className="relative">
      <HeroHeaderSection />
      <BrandSection />
      <AboutUs
        img="/public/Images/about-img-1.png"
        component={
          <TopicBox
            topic="درباره ما"
            title="موضوع کریپ تولند بهترین برای آی سی ا شما"
            disc={` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است  `}
            children={
              <ul className="list-disc  mt-8 leading-9">
                <li className="text-textColorGray">
                  لورم ایپسوم متن ساختگی با تولید سادگی
                </li>
                <li className="text-textColorGray">
                  لورم ایپسوم متن ساختگی با تولید سادگی
                </li>
                <li className="text-textColorGray">
                  لورم ایپسوم متن ساختگی با تولید سادگی
                </li>
              </ul>
            }
          />
        }
      />
      <AboutUs
        img="/public/Images/about-img-2.png"
        reverse={true}
        component={
          <TopicBox
            topic="اقتصاد منحصر به فرد"
            title="یک بستر بانکی که راه حل های توسعه دهنده را امکان پذیر می کند"
            disc={` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است `}
            children={
              <ul className="list-none  mt-8 leading-9">
                <li className="text-textColorGray     before:content-['✓']  before:ml-2    before:text-green-900   ">
                  ساختار مدولارلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </li>
                <li className="text-textColorGray    before:content-['✓'] before:ml-2    before:text-green-900  ">
                  ساختار مدولارلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </li>
                <li className="text-textColorGray    before:content-['✓']  before:ml-2    before:text-green-900 ">
                  ساختار مدولارلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </li>
              </ul>
            }
          />
        }
      />
      <div className="container p-lg servicesSection">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-2 col-start-3">
            <ServicesSection
              icon="/public/Images/servicesImage/service-icon-1.svg"
              color="#16BF86"
              title="برنامه کرایپ تو لند"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک"
            />
          </div>
          <div className="col-span-2">
            <ServicesSection
              icon="/public/Images/servicesImage/service-icon-2.svg"
              color="#5874CF"
              title="خدمات معدن"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک"
            />
          </div>
          <div className="col-span-2">
            <ServicesSection
              icon="/public/Images/servicesImage/service-icon-3.svg"
              color="#F09790"
              title="بلوک های زنجیره ای"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک"
            />
          </div>
          <div className="col-span-2">
            <ServicesSection
              icon="/public/Images/servicesImage/service-icon-4.svg"
              color="#FFAE57"
              title="تبادل"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک"
            />
          </div>
        </div>
      </div>

      <HowToUse />
      <AboutUs
        img="/public/Images/chart/graphic.png"
        reverse={false}
        component={
          <TopicBox
            topic="اطلاعات ما"
            title="اطلاعات آماری"
            disc={` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است `}
            children={
              <ul className="list-none  mt-8 leading-9 relative">
                <li className="text-textColorGray  font-bold   before:ml-2    before:text-green-900   ">
                  <span className="customLine"  style={{backgroundColor :  "#8761A8"}}></span>
                  فرمول واقعی
                </li>
                <li className="text-textColorGray font-bold  before:ml-2    before:text-green-900  ">
                  <span className="customLine"  style={{backgroundColor :  "#F09790"}}></span>
                  فرمول واقعی پیشرو
                </li>
                <li className="text-textColorGray  font-bold  before:ml-2    before:text-green-900 ">
                  <span className="customLine"  style={{backgroundColor :  "#FFAE57"}}></span>
                  کیفیت فوق العاده
                </li>
                <li className="text-textColorGray font-bold   before:ml-2    before:text-green-900 ">
                  <span className="customLine"  style={{backgroundColor :  "#5874CF"}}></span>
                  پشتیبانی سریع
                </li>
              </ul>
            }
          />
        }
      />

      <FabIcon/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
