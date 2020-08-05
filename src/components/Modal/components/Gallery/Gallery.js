import React, { useState, useEffect } from 'react';
import s from './Gallery.module.scss';
import Slider from 'react-slick';
import Arrow from '../../../Slider/components/Arrows/Arrows';

function Gallery() {


    const items = [
        "https://ae01.alicdn.com/kf/HTB1YMyLXEjrK1RkHFNRq6ySvpXaM/anime-manga-Son-Goku-Dragon-Ball-Goku-MD725-custom-print-wall-art-fabric-poster-for-room.jpg",
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxpMUpeXe3pmMZDKC1Tf02pe7h0e8JQcdxNQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBuORoI1rkSgJkDTlyy4N-v1FZ1kpXCK6f0g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFWEJL1BjhPPzDLgzW9MnAhwCmVPRoRgMZgw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFWEJL1BjhPPzDLgzW9MnAhwCmVPRoRgMZgw&usqp=CAU",


    ];

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    });


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        prevArrow: <Arrow bg="#fff" type="prev" />,
        nextArrow: <Arrow bg="#fff" type="next" />
      };

      const settingsThumbs = {
        className: "sliderThumbs",
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px',
        lazyLoad: 'ondemand',
        prevArrow: <Arrow bg="#fff" position="relative" zIndex="3" left="6rem" type="prev" />,
        nextArrow: <Arrow bg="#fff" position="relative" zIndex="3" right="6rem" type="next" />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
        ]
      };


      return (
        <div className="slider-wrapper">
          <Slider {...settings}
            asNavFor={nav2}
            ref={slider => (setSlider1(slider))}
          >
            {items.map(item => (
                <div>
                    <img style={{height: "25rem", width: "100%"}}  src={item} />
                </div>
            ))}
          </Slider>
          <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {items.map((item) =>
              <div className="slick-slide">
                <img className="slick-slide-image" src={item} />
              </div>

            )}

          </Slider>
        </div>
        </div>
      );
}

export default Gallery;