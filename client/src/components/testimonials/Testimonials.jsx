import { SwiperSlide, Swiper } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import './Testimonials.scss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { client, urlFor } from '../../client';
import { useEffect, useState } from 'react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const query = "*[_type == 'testimonials']";

        client.fetch(query).then(data => {
            console.log(data);
            setTestimonials(data);
        });

    }, []);

    return (
        <div id='testimonials' className='app__testimonials'>
            <h3 className='header__text'>Testimonials</h3>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {testimonials.map((testimonial => (
                    <SwiperSlide key={testimonial.name}>
                        <div className='app__testimonial'>
                            <div className='app__testimonial-img'>
                                <img src={urlFor(testimonial.imgUrl)} alt="image" />
                            </div>

                            <p>{testimonial.description}</p>

                            <h5>{testimonial.name}</h5>
                           
                        </div>
                    </SwiperSlide>
                )))}

            </Swiper>
        </div>

    )
}

export default Testimonials