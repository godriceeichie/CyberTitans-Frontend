import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { A11y, Keyboard, Navigation } from 'swiper/modules'
import SwiperNavButtons from './SwiperNavButtons'
import products from '../data/products'
import ProductCard from './ProductCard'

const SwiperContainer = () => {
  return (
    <Swiper
    
      slidesPerView={1 }
      grabCursor={true}
      spaceBetween={20}
      keyboard={{
          enabled: true,
      }}
      loop={true}
      breakpoints={{
        769: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        }
      }}
      modules={[Keyboard, Navigation, A11y]}
      className="mySwiper"
    >
        <SwiperNavButtons />
        {
          products.map(({index, image, name, price, discountPrice}) => {
            return(
              <SwiperSlide key={index}>
                <ProductCard name={name} image={image} price={price} discountPrice={discountPrice} />
              </SwiperSlide>
            )
          })
        }
    </Swiper>
  )
}

export default SwiperContainer