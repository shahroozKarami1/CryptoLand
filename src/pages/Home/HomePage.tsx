import AboutUs from "../../components/aboutUs/AboutUs";
import BrandSection from "../../components/BrandSection/BrandSection";
import HeroHeaderSection from "../../components/heroHeaderSection/HeroHeaderSection";
import TopicBox from "../../components/TopicBox/TopicBox";

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
