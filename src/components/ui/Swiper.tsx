import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

export default () => {
  const images = [
    {
      img: "/images/swiper1.jpg",
      place: "Melbourne, Australia",
      text: "be quick! get the best villa in town",
    },
    {
      img: "/images/swiper2.jpg",
      place: "Miami, South Florida",
      text: "ACT NOW! get the highes level penthouse",
    },
    {
      img: "/images/swiper3.jpg",
      place: "Toronto, Canada",
      text: "hurry! get the best villa for you",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="h-screen "
    >
      {images.map((item, index) => {
        const [city, country] = item.place.split(", ");

        return (
          <SwiperSlide key={index} className="relative cursor-grab">
            
            <img
              src={item.img}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="absolute inset-8 flex flex-col   justify-center text-white  px-6 font-poppins">
              <p className="bg-white font-medium inline-block w-auto max-w-fit px-3 py-1">
                <span className="text-black">{city}, </span>
                <span className="text-[#F35525]">{country}</span>{" "}
            
              </p>
              <p className="text-[3.5rem] font-bold uppercase">{item.text}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
