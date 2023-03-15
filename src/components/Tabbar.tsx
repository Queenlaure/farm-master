import React from "react";
import { Link } from "react-router-dom";
function Tabbar() {
  return (
    <div className="bottom-nav" style={{ zIndex: "110" }}>
      <div className="row m-0">
        <Link to={"/"} className="col-3 tab text-center">
          <i className="fa fa-home"></i>
          <span className="d-block">Home</span>
        </Link>
        <Link to={"/soil-profile"} className="col-3 tab">
          <i className="fa fa-calendar"></i>
          <span className="d-block">Calendar</span>
        </Link>
        <Link to={"/projects"} className="col-3 tab">
          <i className="fa fa-gear"></i>
          <span className="d-block">Projects</span>
        </Link>
        <Link to={"/waste-marketplace"} className="col-3 tab">
          <i className="fa fa-shopping-cart"></i>
          <span className="d-block">Market</span>
        </Link>
      </div>
    </div>
  );
}

export default Tabbar;
