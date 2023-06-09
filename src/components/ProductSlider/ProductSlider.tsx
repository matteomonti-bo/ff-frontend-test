import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/a11y";
import "swiper/css/pagination";
import {isValidUrl } from "../../libs/utils"
import "./ProductSlider.scss"

// import required modules
import { Pagination, A11y } from "swiper";

type ProductSliderProps = {
  images: string[];
  title: string;
}
const ProductSlider = ({images, title}:ProductSliderProps) => {
  return (
    <div>
      <Swiper
        modules={[Pagination, A11y]}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) => {
           return '<span class="' + className + '"><span class="visually-hidden">' + (index + 1) + "</span></span>";
          },
        }}
      >
        {images.filter(image => isValidUrl(image)).map((image, i) => <SwiperSlide key={i}><img src={image} alt={`${title} - ${i+1}`} /></SwiperSlide>)}
      </Swiper>
      <div className='custom-pagination'></div>
    </div>
  );
};

export default ProductSlider;
