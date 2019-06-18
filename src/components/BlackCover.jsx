import React, { Component } from "react";
import "../css/blackCover.scss";

export class BlackCover extends Component {
  render() {
    let blackIndex;
    if (this.props.step > 1) {
      blackIndex = 1;
    }
    if (this.props.step > 7) {
      blackIndex = 3;
    }
    if (this.props.step > 11) {
      blackIndex = 5;
    }
    if (this.props.step > 14) {
      blackIndex = 7;
    }
    return <div id="black_cover" style={{ zIndex: blackIndex }} />;
  }
}

export default BlackCover;
