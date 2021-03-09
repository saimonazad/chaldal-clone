import React from "react";
import Navbar from "../navbar";
import CarouselHome from "../carousel";
import Cart from "../cart";

import "./test.css";
import { Layout, Menu, Input, Row, Col } from "antd";
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

const Test = () => {
  return (
    <Layout>
      <Navbar />
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          marginTop: "60px",
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav 4
          </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav 6
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav 7
          </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav 8
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <header className="header">
          <h2>Groceries Delivered in 1 hour</h2>
          <Search
            className="header--search"
            placeholder="Search for products"
            size="large"
          />
        </header>{" "}
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
      <Cart />
    </Layout>
  );
};
export default Test;
