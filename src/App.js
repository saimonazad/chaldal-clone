import React, { useState } from "react";
import Navbar from "./components/navbar";
import CarouselHome from "./components/carousel";
import Cart from "./components/cart";
import Sidebar from "./components/sidebar";
import HomepageHeader from "./components/HeaderHomepage";
import "./App.css";
import { Layout, Menu, Input, Row, Col, Affix, Button } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  AppleOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const App = () => {
  const [cartActiveSate, setcartActiveSate] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Navbar />
        <Sidebar />
        <Layout
          className="site-layout"
          style={{ marginLeft: 200 }}
          className={`${cartActiveSate ? "cart-active" : " "}`}
        >
          <HomepageHeader />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div className="site-layout-background">
              <Row>
                <Col span={12}>
                  <img
                    src="https://cdn.chaldal.net/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D74476&amp;q=low&amp;v=1&amp;w=588&amp;h=160&amp;webp=1"
                    data-reactid=".uqxk91gfc0.6.2.0.0.2.0.0.0"
                  />
                </Col>
                <Col span={12}>
                  <img
                    src="https://cdn.chaldal.net/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D74477&amp;q=low&amp;v=1&amp;w=588&amp;h=160&amp;webp=1"
                    data-reactid=".uqxk91gfc0.6.2.0.0.2.1.0.0"
                  />
                </Col>
              </Row>
            </div>
            <div className="section--productCategory">
              <h1>Our Product Categories</h1>
              <Row gutter={[16, 16]} className="category-row">
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
              </Row>
              <Row gutter={16} className="category-row">
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
              </Row>
              <Row gutter={16} className="category-row">
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
              </Row>
              <Row gutter={16} className="category-row">
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  className="productCategory--box"
                >
                  <div className="gutter-row">
                    <h3 className="category--name ">Fruits and Vegetables</h3>
                    <AppleOutlined className="category--icon" />
                  </div>
                </Col>
              </Row>
            </div>
            <CarouselHome />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>

        <Cart active={cartActiveSate} />
      </Layout>
      {!cartActiveSate && (
        <Affix style={{ position: "fixed", bottom: "40%", right: 0 }}>
          <div
            style={{
              textAlign: "center",
              padding: 5,
              backgroundColor: "#55584D",
            }}
          >
            <ShopOutlined style={{ fontSize: 30 }} />
            <h3>0 ITEMS</h3>
          </div>
          <div style={{ backgroundColor: "#F5FCEB" }}>৳ 00</div>
        </Affix>
      )}
    </>
  );
};
export default App;
