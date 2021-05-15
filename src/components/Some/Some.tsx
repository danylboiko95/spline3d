import React from "react";
import { NavLink } from "react-router-dom";
import "./Some.css";

interface IPropsSome {}

const Some: React.FC<IPropsSome> = (props) => {
  return (
    <div className="Some">
      <iframe
        src="https://my.spline.design/libraryfloppy-f6a3a9eae4207ff6aa8f8c41e15c4c68/"
        frameBorder="0"
      ></iframe>
      <NavLink to="/main">Link to portfolio</NavLink>
    </div>
  );
};

export default Some;
