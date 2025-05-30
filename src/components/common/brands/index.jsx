import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const brand_images = [
  '/assets/img/brand/google.png',
  '/assets/img/brand/canva.png',
  '/assets/img/brand/dv.png',
  '/assets/img/brand/adobe.png',
  '/assets/img/brand/hubspot.png',
  '/assets/img/brand/semursh.png',
  
]

const Index = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), [])
  return (
    <Swiper
      loop={sliderLoop}
      spaceBetween={30}
      slidesPerView={2}
      modules={[Autoplay]}
      autoplay={
        { delay: 2500, disableOnInteraction: true, }
      }
      className="swiper-wrapper d-flex align-items-center"
      breakpoints={{
        // when window width is >= 1200px
        1200: {
          slidesPerView: 5,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 5,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 3,
        }
      }}
    >
      {brand_images.map((brand, i) => (
        <SwiperSlide key={i}>
          <div className="tp-brand-icon text-center">
            <img src={brand} alt="" height={100} width={100} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Index;