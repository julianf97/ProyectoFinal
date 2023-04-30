import './slider.scss';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight  } from 'react-icons/bs';




export const Slider = () => { 

    const slides = [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/foxtienda-ee7dc.appspot.com/o/1058%2Fbannerprincipal%2F1058-banner-web-banner-space-gamer-q1-2023-1376.jpg?alt=media&token=25b13552-1c6b-4ff8-b53e-97af0414599f'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/foxtienda-ee7dc.appspot.com/o/1058%2Fbannerprincipal%2F1058-banner-portafolio-tuf-gaming-2000x725-5191.jpg?alt=media&token=ed2bab60-fd49-4f87-8737-2a10edb1e3bf'
        },
        { 
            url: ' https://firebasestorage.googleapis.com/v0/b/foxtienda-ee7dc.appspot.com/o/1058%2Fbannerprincipal%2F1058-banner-amdbanner-441.jpg?alt=media&token=ac474a3c-df15-4e40-b8e8-05b25bcc492e'
        },
        {
            url: 'https://spacegamer.com.ar/img/Public/1058-banner-untitled-1-2518.gif'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/foxtienda-ee7dc.appspot.com/o/1058%2Fbannerprincipal%2F1058-banner-coolermaster-2053.jpg?alt=media&token=8cbada66-1518-40d7-9ac4-d3cd10c29be5'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    return (
        <div className='slider-container max-w-[5000px] h-[76.5vh] w-full m-auto py-0 px-0 relative group'>

            <div style={{backgroundImage: `url(${slides[0].url})`}} className={`image-slider-responsive w-full h-full rounded-2x0 bg-top bg-cover bg-no-repeat duration-500 ${currentIndex === 0 ? null : "hidden"}`}>     
            </div>

            <div style={{backgroundImage: `url(${slides[1].url})`}} className={`image-slider-responsive w-full h-full rounded-2x0 bg-top bg-cover bg-no-repeat duration-500 ${currentIndex === 1 ? null : "hidden"}`}>
            </div>
            <div style={{backgroundImage: `url(${slides[2].url})`}} className={`image-slider-responsive w-full h-full rounded-2x0 bg-top bg-cover bg-no-repeat duration-500 ${currentIndex === 2 ? null : "hidden"}`}>
            </div>
            <div style={{backgroundImage: `url(${slides[3].url})`}} className={`image-slider-responsive w-full h-full rounded-2x0 bg-top bg-cover bg-no-repeat duration-500 ${currentIndex === 3 ? null : "hidden"}`}>
            </div>
            <div style={{backgroundImage: `url(${slides[4].url})`}} className={`image-slider-responsive w-full h-full rounded-2x0 bg-top bg-cover bg-no-repeat duration-500 ${currentIndex === 4 ? null : "hidden"}`}>
            </div>
            {/* Left Arrow */}
            <div onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft size={30}/>
            </div>
            {/* Right Arrow */}
            <div onClick={nextSlide}  className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight size={30}/>
            </div>
        </div>

    )
}