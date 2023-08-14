import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { A11y, Keyboard, Navigation } from 'swiper/modules'
import SwiperNavButtons from './SwiperNavButtons'
import ProductCard from './ProductCard'
import useProductsContext from '../hooks/useProducts'
import instance from '../config/api'

const SwiperContainer = () => {
  const {products, setProducts} = useProductsContext()
  useEffect(() => {
    instance.get('/api/v1/user/getAllProducts')
      .then((response) => {

        setProducts(response.data.content);

        // Update local storage with fetched data
        localStorage.setItem('products', JSON.stringify(response.data.content));

        ;
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
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
          products.map(({productId, index, productName, productPrice, discountPrice}) => {
            return(
              <SwiperSlide key={index}>
                <ProductCard id={productId} name={productName} price={productPrice} discountPrice={discountPrice} />
              </SwiperSlide>
            )
          })
        }
    </Swiper>
  )
}

export default SwiperContainer