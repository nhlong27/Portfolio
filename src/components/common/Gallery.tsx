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
    <div className="w-full h-full flex flex-col justify-start items-center">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-auto w-full object-center mx-auto"
      >
        {props.galleries?.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image} />
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
        className="w-full flex h-[13rem] overflow-hidden"
      >
        {props.galleries.map((image, i) => (
          <SwiperSlide key={i} className="border">
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
