import React from "react";

import "./style.css";
import { TabItem } from "../../components/SideBar";

export const Home = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <TabItem className="home-item-instance" />
        <TabItem
          className="services-item"
          divClassName="design-component-instance-node"
          text="Services"
        />
        <TabItem className="news-item" text="News" />
        <TabItem
          className="blog-item"
          divClassName="design-component-instance-node"
          text="Blog"
        />
        <TabItem
          className="contact-item"
          divClassName="design-component-instance-node"
          text="Contact"
        />
      </div>
      <div className="box">
        <div className="content">
          <div className="logoContainer">
            <img
              className="logo"
              alt="Logoncc"
              src="https://c.animaapp.com/CqslzPRL/img/logoncc-1@2x.png"
            />
          </div>
          <div className="text-container">
            <p className="header-content">Lorem ipsum dolor sit asmet?</p>
            <p className="content-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>

          <div className="group-overlap">
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <p className="p">
                  ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                  est ullamcorper id. Aenean consequat condimentum velit ut
                  tempor. Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </p>
                <p className="text-wrapper-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at
                </p>
                <p className="text-wrapper-3">Lorem ipsum dolor sit amet</p>
                <img
                  className="img"
                  alt="Css icon"
                  src="https://c.animaapp.com/CqslzPRL/img/css-icon-1@2x.png"
                />
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-2">
                <p className="text-wrapper-3">Lorem ipsum dolor sit amet</p>
                <img
                  className="img"
                  alt="Html icon"
                  src="https://c.animaapp.com/CqslzPRL/img/html-icon-1@2x.png"
                />
                <p className="p">
                  ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                  est ullamcorper id. Aenean consequat condimentum velit ut
                  tempor. Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </p>
                <p className="text-wrapper-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at
                </p>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-2">
                <p className="p">
                  ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                  est ullamcorper id. Aenean consequat condimentum velit ut
                  tempor. Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </p>
                <p className="text-wrapper-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at
                </p>
                <p className="text-wrapper-3">Lorem ipsum dolor sit amet</p>
                <img
                  className="img"
                  alt="Url icon"
                  src="https://c.animaapp.com/CqslzPRL/img/url-icon-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="footer-container">
        <p>Copyright © 2021</p>
      </div>
        </div>
       
      </div>
     
    </div>
  );
};
