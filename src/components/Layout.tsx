import React from "react";
import "./Layout.css";
import { Link, NavLink } from "react-router-dom";

interface IPropsLayout {}

const Layout: React.FC<IPropsLayout> = (props) => {
  return (
    <div className="canvas">
      <h1>
        Hello
        <div>This is my portfolio</div>
        <NavLink to="/">back</NavLink>
        <iframe
          src="https://my.spline.design/librarydeviceclouds-b1c580333e141cbd25ce37303f5d3db9/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </h1>
    </div>
  );
};

export default Layout;
