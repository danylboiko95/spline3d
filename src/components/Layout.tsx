import React from "react";
import "./Layout.css";

interface IPropsLayout {}

const Layout: React.FC<IPropsLayout> = (props) => {
  return (
    <div className="canvas">
      <h1>
        Hello
        <div>This is my portfolio</div>
      </h1>
    </div>
  );
};

export default Layout;
