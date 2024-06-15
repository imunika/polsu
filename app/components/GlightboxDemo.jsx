import React, { useState, useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const GlightboxDemo = ({ galleryItems }) => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("glightbox").then((GLightbox) => {
        const newLightbox = GLightbox.default({
          elements: galleryItems,
          openEffect: "zoom",
          closeEffect: "fade",
        });
        setLightbox(newLightbox);
      });
    }

    return () => {
      if (lightbox && lightbox.destroy) {
        lightbox.destroy();
      }
    };
  }, []);

  // Custom Arrow components
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  // Settings for the slider
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: galleryItems.length > 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const sliderStyles = `
        .slick-track {
          display: flex;
        }
        .slick-track .slick-slide {
          display: flex;
          height: auto;
          align-items: center;
          justify-content: center;
        }

        .slick-next:before,
        .slick-prev:before {
          visibility: visible;
          color: black;
        }
        `;

  return (
    <div>
      <style>{sliderStyles}</style>
      <Slider {...sliderSettings}>
        {galleryItems.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <Link
              href={item.href}
              className="glightbox2 cursor-pointer flex flex-col items-center justify-center"
              data-glightbox={item.description}
              onClick={(e) => {
                e.preventDefault();
                lightbox.openAt(index);
              }}
            >
              <img src={item.href} alt={item.title} />              
            </Link>
            <figcaption
                className="mt-3 ml-1 text-xs text-slate-600 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></figcaption>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GlightboxDemo;
