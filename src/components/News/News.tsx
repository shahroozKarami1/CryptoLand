import TitleSection from "../../assets/titleSection/TitleSection";
import BoxNews from "./BoxNews";
import Slider from "react-slick";
const News = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div  className="mt-10   lg:px-52   container  p-xl">
      <TitleSection direction="center" isAfter = {false} title="خبر"  topic="خبر درباره ما" />
      <Slider {...settings}>
        <BoxNews
          logo="/public/Images/LogoNews/firstLogo.png"
          id={1}
          disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
        />
        <BoxNews
          logo="/public/Images/LogoNews/firstLogo.png"
          id={1}
          disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
        />
        <BoxNews
          logo="/public/Images/LogoNews/secoundLogo.png"
          id={1}
          disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
        />
      </Slider>
    </div>
  );
};

export default News;
