import "../styles/Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import {Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper/modules";
const Testimonials = () => {

    return<>
        <section className="testimonials">
            <div className="heading">
                <h2>WHAT <span>PEOPLE</span> SAY</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vel nostrum quaerat velit repellendus nobis, quisquam ducimus deserunt recusandae architecto!</p>
            </div>
            <div className="reviewCardWrapper">
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                    clickable: true,
                    }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
                    mousewheel={true}
                    keyboard={true}
                    spaceBetween={'3%'}
                    breakpoints={{
                            // when window width is >= 640px
                            400: {
                            slidesPerView: 1,
                            },
                            500: {
                            slidesPerView: 1.2,
                            },
                            600: {
                            slidesPerView: 1.5,
                            },
                            750: {
                            slidesPerView: 2,
                            },
                            1000: {
                            slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            1300: {
                            slidesPerView: 2,
                            },
                        }}  
                >
                    <SwiperSlide>
                        <div className="reviewCard">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, doloremque ullam. Amet facilis ut nihil ipsa repudiandae corrupti, enim nesciunt eius minus reprehenderit quos eaque voluptatibus autem doloribus itaque quam.</p>
                            <hr />
                            <div className="reviewProfile">
                                <img src="" alt="" />
                                <div className="reviewProfileContent">
                                    <h3>John Doe</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="reviewCard">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, doloremque ullam. Amet facilis ut nihil ipsa repudiandae corrupti, enim nesciunt eius minus reprehenderit quos eaque voluptatibus autem doloribus itaque quam.</p>
                            <hr />
                            <div className="reviewProfile">
                                <img src="" alt="" />
                                <div className="reviewProfileContent">
                                    <h3>John Doe</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="reviewCard">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, doloremque ullam. Amet facilis ut nihil ipsa repudiandae corrupti, enim nesciunt eius minus reprehenderit quos eaque voluptatibus autem doloribus itaque quam.</p>
                            <hr />
                            <div className="reviewProfile">
                                <img src="" alt="" />
                                <div className="reviewProfileContent">
                                    <h3>John Doe</h3>
                                    <p>Guest</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>

}

export default Testimonials