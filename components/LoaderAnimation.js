import React, { Component } from "react";
import ReactLoading from "react-loading";
import classes from "./LoaderAnimation.module.css";

class LoaderAnimation extends Component {
  render() {
    return (
      <div className={classes.loader}>
        <ReactLoading type="spokes" color="#fff" height={"20%"} width={"20%"} />
      </div>
    );
  }
}

export default LoaderAnimation;
