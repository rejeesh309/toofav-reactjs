
import Image from 'next/image'
import { Navigation, A11y, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MainBanner(){
    return (
        <>
            <Swiper
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          navigation
        >
          <SwiperSlide>
          <Image
            src="/main-banner-0584589056.jpg"
            alt="Banner image"
            fill
          />
          </SwiperSlide>
          <SwiperSlide>
          <Image
            src="/main-banner-0584589056.jpg"
            alt="Banner image"
            fill
          /></SwiperSlide>
          <SwiperSlide>
          <Image
            src="/main-banner-0584589056.jpg"
            alt="Banner image"
            fill
          /></SwiperSlide>

        </Swiper>
        </>
        )
}

// export default User