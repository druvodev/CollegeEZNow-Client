// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import GalleryCard from "./GalleryCard";

const GroupGallery = () => {
  const groupImg = [
    {
      image: "https://pbs.twimg.com/media/BhP5pe4CAAA7l9-.jpg",
      details: "27-01-2023, Dhaka University",
    },
    {
      image:
        "https://education.uic.edu/wp-content/uploads/sites/137/2019/04/2019.CallMeMister.014-edit-1090x541.jpg",
      details: "18-06-2022,  Jahangirnagar University",
    },
    {
      image:
        "https://media.getmyuni.com/azure/college-images-test/rr-institute-of-technology-rrit-bangalore/ac7660f3763e4c87a1d66bab23f4df10.jpeg",
      details: "12-03-2023, Chittagong University",
    },
  ];

  return (
    <section className="mt-10 sm:mt-20">
      <h2 className="text-3xl font-bold text-center mb-3">
        College Graduate&apos;s Group Pictures
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000}
        modules={[Autoplay]}
      >
        {groupImg.map((item) => (
          <SwiperSlide key={item.details}>
            <GalleryCard details={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GroupGallery;
