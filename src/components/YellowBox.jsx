import React, { Component } from "react";
import "../css/yellowBox.scss";
import joystick from "../assets/joystick.svg";
import { TweenMax, Back } from "gsap";

export class YellowBox extends Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount() {
    // use the node ref to create the animation
    this.myTween = TweenMax.to(this.myElement, 0.2, {
      // opacity: 1,
      scale: 1,
      delay: 0.5,
      transformOrigin: "center left"
    });
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep.nextStep();
  };
  render() {
    // console.log(this.props.ybContent);

    const ybC = this.props.ybContent;

    // RENDER NEXT BUTTON
    let next;
    if (
      this.props.step === 2 ||
      this.props.step === 3 ||
      this.props.step === 7 ||
      this.props.step === 8 ||
      this.props.step === 9 ||
      this.props.step === 10 ||
      this.props.step === 12
    ) {
      next = (
        <button id="yb_but" onClick={this.continue}>
          Næste
        </button>
      );
    }

    // STEP 12
    let stepTjek12;
    // ---------------------------------------------------
    if (this.props.step > 11) {
      stepTjek12 = true;
    }
    // -------------------------------------------------

    return (
      <div id="YellowBox_wrap" ref={div => (this.myElement = div)}>
        <div
          id="yb_content_con"
          style={stepTjek12 ? { left: "-590px" } : { outline: "none" }}
        >
          <div
            id="arrowLeft_con"
            style={
              stepTjek12
                ? { left: "263px", transform: "rotate(180deg)" }
                : { outline: "none" }
            }
          >
            <div id="arrowLeft" />
          </div>
          <div id="header_con">
            <div id="title">{ybC.title}</div>

            <div id="tips_icon">
              <img src={joystick} alt="" />
            </div>
          </div>
          <div id="y_txt" dangerouslySetInnerHTML={{ __html: ybC.info }} />
          {next}
        </div>
      </div>
    );
  }
}

export default YellowBox;
