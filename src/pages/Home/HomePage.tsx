import { Link } from "react-router-dom";
import AboutUs from "../../components/aboutUs/AboutUs";
import BrandSection from "../../components/BrandSection/BrandSection";
import ChartMe from "../../components/Chart/ChartMe";
import FabIcon from "../../components/FabIcon/FabIcon";
import HeroHeaderSection from "../../components/heroHeaderSection/HeroHeaderSection";
import HowToUse from "../../components/HowToUse/HowToUse";
import MainQuestions from "../../components/MainQuestions/MainQuestions";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Statistics from "../../components/Statistics/Statistics";
import TopicBox from "../../components/TopicBox/TopicBox";
import OfferToken from "../../components/OfferToken/OfferToken";
import Docs from "../../components/docs/Docs";

const HomePage = () => {
  return (
    <main className="relative">
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
                  <span
                    className="customLine"
                    style={{ backgroundColor: "#8761A8" }}
                  ></span>
                  فرمول واقعی
                </li>
                <li className="text-textColorGray font-bold  before:ml-2    before:text-green-900  ">
                  <span
                    className="customLine"
                    style={{ backgroundColor: "#F09790" }}
                  ></span>
                  فرمول واقعی پیشرو
                </li>
                <li className="text-textColorGray  font-bold  before:ml-2    before:text-green-900 ">
                  <span
                    className="customLine"
                    style={{ backgroundColor: "#FFAE57" }}
                  ></span>
                  کیفیت فوق العاده
                </li>
                <li className="text-textColorGray font-bold   before:ml-2    before:text-green-900 ">
                  <span
                    className="customLine"
                    style={{ backgroundColor: "#5874CF" }}
                  ></span>
                  پشتیبانی سریع
                </li>
              </ul>
            }
          />
        }
      />
      <div className="flex items-center  justify-evenly   px-4">
        <Statistics statistics={20.324} title="قیمت فعلی" color="#8761A8" />
        <Statistics
          statistics={0.052646}
          title="دسته های متوسط استفاده شده"
          color="#5874CF"
        />
        <Statistics
          statistics={5.658}
          title="دسته های باقی مانده"
          color="#16BF86"
        />
        <Statistics statistics={65} title="دسته های درصد" color="#F09790" />
      </div>
      <ChartMe />
      <div>
        <div className="container p-xl ">
          <div className="grid-cols-12  grid">
            <div className="col-span-5  col-start-2">
              <MainQuestions
                title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم؟"
                disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی"
              />
              <MainQuestions
                title="سوالات متداول"
                disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی"
              />
              <MainQuestions
                title="لورم ایپسوم متن ساختگی؟"
                disc="لورم ایپسوم متن ساختگی با تولید؟"
              />
            </div>
            <div className="col-span-5">
              <MainQuestions
                title="لورم ایپسوم متن ساختگی با تولید سادگی؟"
                disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان"
              />
              <MainQuestions
                title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم؟"
                disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی"
              />
              <MainQuestions
                title="لورم ایپسوم متن ساختگی؟"
                disc="لورم ایپسوم متن ساختگی با تولید؟"
              />
            </div>
          </div>
        </div>
      </div>
      <FabIcon />
      <div className="appContent">
        <AboutUs
          img="/public/Images/Android/phone.png"
          reverse={true}
          component={
            <TopicBox
              topic="برنامه موبایل"
              title="برنامه کرایپ تو لند برای پلت فرم آی سی او"
              disc={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی`}
              children={
                <div className="flex  items-center  justify-start  gap-2  mt-7">
                  <Link to={"/"}>
                    <img src="/public/Images/Android/as.png" alt="" />
                  </Link>
                  <Link to={"/"}>
                    <img src="/public/Images/Android/gp.png" alt="" />
                  </Link>
                </div>
              }
            />
          }
        />
      </div>
      <div className="container   p-xl">
        <div className="grid  grid-cols-12  items-stretch  gap-5">
          <div className="col-span-6">
            <img src="/public/Images/bg-token.png" alt="" />
          </div>
          <div className="col-span-5">
            <OfferToken />
          </div>
        </div>
      </div>
      <div className="container  p-xl">
        <div className=" grid  grid-cols-12      ">
        <div className="col-span-3">
            <Docs title="شرایط و ضوابط"   />
          </div>
          <div className="col-span-3">
            <Docs title="کاغذهای سفید" />
          </div>
          <div className="col-span-3">
            <Docs title="سیاست حفظ حریم خصوصی" />
          </div>
          <div className="col-span-3">
            <Docs title="پروفایل تجاری" />
          </div>
        </div>
      </div>
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
    </main>
  );
};

export default HomePage;
