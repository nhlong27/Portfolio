import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Gallery(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="hidden w-full h-full lg:flex flex-col justify-start items-center">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full object-center mx-auto rounded-lg overflow-hidden max-h-72 2xl:max-h-96"
      >
        {props.galleries?.map((image, i) => (
          <SwiperSlide className="" key={i}>
            <img src={image} className="object-fill" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full flex max-h-36 2xl:max-h-52 "
      >
        {props.galleries.map((image, i) => (
          <SwiperSlide key={i} className="border rounded-lg overflow-hidden">
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
