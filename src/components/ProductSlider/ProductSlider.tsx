import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/a11y";
import "swiper/css/pagination";
import {isValidUrl } from "../../services/utils"
import styles from "./ProductSlider.module.scss"

// import required modules
import { Pagination, A11y } from "swiper";

type ProductSliderProps = {
  images: string[];
  title: string;
}
const ProductSlider = ({images, title}:ProductSliderProps) => {
  return (
    <div className={styles.productSlider}>
      <Swiper
        modules={[Pagination, A11y]}
        pagination={true}
      >
        {images.filter(image => isValidUrl(image)).map((image, i) => <SwiperSlide key={i}><img src={image} alt={`${title} - ${i+1}`} /></SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
