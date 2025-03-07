import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import carousel component from react package
import { Carousel } from "react-responsive-carousel";

// import images
import BANNER_IMG_1 from "../../assents/banner-images/carouselImage1.webp";
import BANNER_IMG_2 from "../../assents/banner-images/carouselImage2.webp";
import BANNER_IMG_3 from "../../assents/banner-images/carouselImage3.webp";
import BANNER_IMG_4 from "../../assents/banner-images/carouselImage4.webp";
import BANNER_IMG_5 from "../../assents/banner-images/carouselImage5.webp";

const Banner = () => {
  return (
    <>
      <div style={{ margin: "10px 20px" }}>
        <Carousel
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval="2000"
          showStatus={false}
        >
          <div>
            <img src={BANNER_IMG_1} />
          </div>
          <div>
            <img src={BANNER_IMG_2} />
          </div>
          <div>
            <img src={BANNER_IMG_3} />
          </div>
          <div>
            <img src={BANNER_IMG_4} />
          </div>
          <div>
            <img src={BANNER_IMG_5} />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
