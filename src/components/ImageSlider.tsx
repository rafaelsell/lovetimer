import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";

interface ImageSliderProps {
  images: string[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-auto flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
