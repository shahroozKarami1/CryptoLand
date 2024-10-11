import TitleSection from "../../assets/titleSection/TitleSection";
import BoxNews from "./BoxNews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";

const News = () => {
  return (
    <main   className="xl:container  xl:p-xl   xs:p-5">
              <TitleSection
          direction="center"
          isAfter={false}
          title="خبر"
          topic="خبر درباره ما"
        />
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation
        loop = {true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation  , Autoplay ,  Keyboard]}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >

        <SwiperSlide>
          <BoxNews
            logo="/public/Images/LogoNews/firstLogo.png"
            id={1}
            disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
            />
        </SwiperSlide>
        <SwiperSlide>
          <BoxNews
            logo="/public/Images/LogoNews/firstLogo.png"
            id={1}
            disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
            />
        </SwiperSlide>
        <SwiperSlide>
          <BoxNews
            logo="/public/Images/LogoNews/secoundLogo.png"
            id={1}
            disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
            />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default News;
