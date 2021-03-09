import React, { Component } from "react";
import "./index.css";
import logo from "./logo.png";
import { Input } from "antd";
import {
  MenuOutlined,
  DownCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { Search } = Input;

class Navbar extends Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="nav">
        <div span={1} className="navItem">
          <MenuOutlined />
        </div>
        <div span={3} className="navItem">
          <img src={logo} className="logo" />
        </div>
        <div span={12} className="navItem search">
          <Search placeholder="input search text" size="large" />
        </div>
        <div span={2} className="navItem">
          <DownCircleOutlined />
          <a href="#">Dhaka</a>
        </div>
        <div span={2} className="navItem">
          <QuestionCircleOutlined />
          <a href="">Help & More</a>
        </div>
        <div span={2} className="navItem">
          <a href="#">EN</a> | <a href="#">BN</a>
        </div>
        <div span={2} className="navItem">
          <a href="#">Sign in</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
