import React, { useState } from "react";
import { Row, Col } from "antd";
import menuItems from "./MenuItems";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Row>
      <Col
        xs={{ span: 4 }}
        sm={{ span: 4 }}
        md={{ span: 4 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
        xxl={{ span: 4 }}
      >
        <p>
          <img src={logo} id="logo" />
        </p>
      </Col>

      <Col
        xs={{ span: 20 }}
        sm={{ span: 20 }}
        md={{ span: 20 }}
        lg={{ span: 20 }}
        xl={{ span: 20 }}
        xxl={{ span: 20 }}
      >
        <nav className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={active ? "nav-menu active" : "nav-menu"}>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Col>
    </Row>
  );
};

export default Navbar;
