import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Banner1 from "@assets/Banner1.webp"
import Banner2 from "@assets/Banner2.webp"
import Banner3 from "@assets/Banner3.webp"
import Banner5 from "@assets/Banner5.webp"
import Banner6 from "@assets/Banner6.webp"
import Banner7 from "@assets/Banner7.webp"

export default function CarouselSection() {
  const banners = [
      { src: Banner1.src},
      { src: Banner2.src},
      { src: Banner3.src},
      { src: Banner5.src},
      {href: "/CartaCuauhtemoc.pdf", src: Banner6.src},
      {href: "/IniciativaBoleteras.pdf", src: Banner7.src}
  ]
  const renderArrowPrev = (onClickHandler, hasPrev, label) => hasPrev && (
    <button onClick={onClickHandler} className='absolute z-10 max-w-8 top-0 bottom-0 cursor-pointer text-white/60 hover:text-white transition-colors ml-3'>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9481 14.8285L10.5339 16.2427L6.29122 12L10.5339 7.7574L11.9481 9.17161L10.1196 11H17.6568V13H10.1196L11.9481 14.8285Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.22183 19.7782C-0.0739419 15.4824 -0.0739419 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782ZM5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
  const renderArrowProx = (onClickHandler, hasNext, label) => hasNext && (
    <button onClick={onClickHandler} className='absolute z-10 max-w-8 top-0 bottom-0 right-0 cursor-pointer text-white/60 hover:text-white transition-colors mr-3'>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )

  return (
    <section className='bg-gray-bg'>
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowProx}
      >
        {
          banners.map(banner => (
              banner.href ? 
            <a href={banner.href} target="_blank"><div><img src={banner.src} alt="" /></div></a>
              : 
            <div><img src={banner.src} alt="" /></div>
          ))
        }
      </Carousel>
    </section>
  )
}
