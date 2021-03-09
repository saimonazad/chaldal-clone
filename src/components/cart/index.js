import React, { useState } from "react";
import { Layout } from "antd";
import "./index.css";
import {
  ShoppingOutlined,
  CloseOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

const Cart = (props) => {
  const [count, setCount] = useState(0);
  const [deliveryFeeProgressBar, setdeliveryFeeProgressBar] = useState(20);
  
  return (
    <>
    {props.active && <Sider className="cart--box" >
      <div className="cart--header">
        <div className="cart--items">
          <ShoppingOutlined className="cart--icon" />
          <h1>6 ITEMS</h1>
        </div>
        <div className="cart--close" onClick={!props.active}>
          <p>Close</p>
        </div>
      </div>
      <div
        className="deliveryFee--progressbar"
        style={{ width: deliveryFeeProgressBar + "%" }}
      ></div>
      <div className="cart--deliveryOffer">
        <p className="cart--deliveryOffer__text">
          shop ৳340 or more and save ৳29
        </p>
        <p className="cart--deliveryOffer__amount">৳19</p>
      </div>
      <div className="cart--delivery__type">
        <p>Express Delivery</p>
      </div>
      <div className="cart__items--info">
        <div className="cart__items--details">
          <div className="cart__items--control">
            <UpOutlined
              onClick={() => {
                setCount(count + 1);
                setdeliveryFeeProgressBar(deliveryFeeProgressBar + 10);
              }}
            />
            {count}
            <DownOutlined
              onClick={() => {
                setCount(count - 1);
                setdeliveryFeeProgressBar(deliveryFeeProgressBar - 10);
              }}
            />
          </div>
          <div>
            <img src="" />
          </div>
          <div>
            <p>Khaas Food Psyllium Husk</p>
            <p className="cart__item--Unit__price">৳ 125/100g</p>
          </div>
          <div>
            <span className="">৳ 260</span>
          </div>
          <div>
            <CloseOutlined />
          </div>
        </div>
        <div className="cart__items--details">
          <div className="cart__items--control">
            <UpOutlined />
            1
            <DownOutlined />
          </div>
          <div>
            <img src="" />
          </div>
          <div>
            <p>Khaas Food Psyllium Husk</p>
            <p className="cart__item--Unit__price">৳ 125/100g</p>
          </div>
          <div>
            <span className="">৳ 260</span>
          </div>
          <div>
            <CloseOutlined />
          </div>
        </div>
      </div>
    </Sider>}
    </>
  );
};

export default Cart;
