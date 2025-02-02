import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BANNER_IMG_1 from "../../assents/banner-images/carouselimage2.webp"
import BANNER_IMG_2 from "../../assents/banner-images/carouselimage1.webp"
import BANNER_IMG_3 from "../../assents/banner-images/carouselimage3.webp"
import BANNER_IMG_4 from "../../assents/banner-images/carouselimage4.webp"
import BANNER_IMG_5 from "../../assents/banner-images/carouselimage5.webp"

const Banner =()=>{
    return(
        <>   
         <div style={{margin:"10px 20px"}}>
      <Carousel  autoPlay={true} showThumbs={false} infiniteLoop={true} interval="2000" ariaLabel="">
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
    )
};

export default Banner;