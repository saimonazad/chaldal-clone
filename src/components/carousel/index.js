import React from "react";
import { Carousel } from 'antd';
import './index.css'

const CarouselHome = () => {
  return (
    <Carousel autoplay dotPosition="bottom" className="section--slider1">
      <div>
        <img src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1816/Default/stores/chaldal/components/landingPage2/LandingPage/images/how_to_order_chaldal/tutorial-3.jpg?q=best&webp=1" />
      </div>
      <div>
        <img src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1816/Default/stores/chaldal/components/landingPage2/LandingPage/images/how_to_order_chaldal/tutorial-2.jpg?q=best&webp=1" />
      </div>
      <div>
      <img src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1816/Default/stores/chaldal/components/landingPage2/LandingPage/images/how_to_order_chaldal/tutorial-1.jpg?q=best&webp=1" />
      </div>
    </Carousel>
  );
};

export default CarouselHome;
