import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules



interface PropertiesofData {
    cards_image: string;
    person_names: string;
    cards_article: string;
}

const Cards: React.FC = () => {

    const [information, setInformation] = useState<PropertiesofData[]>([])
    useEffect(() => {
        // Promise Chaining
        axios.get("/assets/cards.json").then(answer => setInformation(answer.data)).catch(error => console.log(error))
    }, [])





    return (
        <div className='total-card'>
            <div className="container">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                   
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        information && information.map(birMelumat => (
                            <SwiperSlide> <Card shekil={birMelumat.cards_image} mukafatinAdi={birMelumat.person_names} mukafatinMetni={birMelumat.cards_article} /></SwiperSlide>

                        ))
                    }


                </Swiper>
            </div>


        </div>
    )
}

export default Cards