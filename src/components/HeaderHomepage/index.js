import React from 'react'
import { Layout, Menu, Input, Row, Col } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;


const HomepageHeader = () => {
    return (
        <Header className="header">
          <h2>Groceries Delivered in 1 hour</h2>
          <Search
            className="header--search"
            placeholder="Search for products"
            size="large"
          />
        </Header>
        
    )
}

export default HomepageHeader
