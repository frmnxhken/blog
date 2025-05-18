import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ListCard from "./ListCard";
import { LIST_ARTICLE } from "@/shared/data";

const Hero = () => {
  return (
    <div className="container max-w-[1200px] mx-auto px-4 py-32">
      <div className="w-2/3">
        <h1 className="font-semibold text-4xl sm:text-7xl">
          Upgrade Your Knowledge In The Future
        </h1>
      </div>
      <div className="mt-12">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {LIST_ARTICLE.slice(0, 3).map((article, index) => (
            <SwiperSlide>
              <ListCard key={index} {...article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
