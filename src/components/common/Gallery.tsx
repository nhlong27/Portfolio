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
    <div className="hidden h-full w-full flex-col items-center justify-start lg:flex">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mx-auto max-h-72 w-full overflow-hidden rounded-lg object-center 2xl:max-h-96"
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
        className="flex max-h-36 w-full 2xl:max-h-52 "
      >
        {props.galleries.map((image, i) => (
          <SwiperSlide key={i} className="overflow-hidden rounded-lg border">
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
