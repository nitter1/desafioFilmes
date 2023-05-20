import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ filmes }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {filmes.map((filme, index) => (
        <div key={index}>
          <img src={filme.image} alt={filme.title} />
          <h3>{filme.title}</h3>
        </div>
      ))}
    </Slider>
  );
}
