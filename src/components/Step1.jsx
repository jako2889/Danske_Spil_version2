import React, { Component } from "react";
import "../css/Step1.scss";
import { TweenMax, Back } from "gsap";

// import Step1Image from "../assets/step1_image.svg";
import ds_logo from "../assets/ds_logo.svg";
export class Step1 extends Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    this.myElement2 = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount() {
    // use the node ref to create the animation
    this.myTween = TweenMax.from(this.myElement, .3, {
      delay: .5,
      x: -1100,
      ease: Back.easeOut.config(1.0002)
    });
    // use the node ref to create the animation
    this.myTween = TweenMax.from(this.myElement2, .3, {
      delay: .8,
      x: 1100,
      ease: Back.easeOut.config(1.0002)
    });
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div className="Modal_wrapper">
        <div className="Modal_con">
          <div ref={div => (this.myElement = div)} className="lp_logo_wrap">
            <div className="lp_logo_con">
              <img src={ds_logo} alt="Danske spil logo" />
            </div>
          </div>
          <div className="lp_txt_con">
            <div className="lp_header">Velkommen</div>
            <div className="lp_l1">
              Mærk spændingen ved at bette når du spiller på dine yndlingsspil.
            </div>
            <div className="lp_l2">
              Gennemfør vores hurtige tutorial og vind en velkomst bonus på
              <span className="lp_span"> 250kr.</span>
            </div>
          </div>
          <div className="lp_btn_wrap">
            <div className="lp_btn_con">
              <button
                ref={div => (this.myElement2 = div)}
                className="lp_btn"
                onClick={this.continue}
                style={{ cursor: "pointer" }}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step1;

//         <div className="Modal_text">
{
  /* <h1>Velkommen</h1>
<p>
  Hos Danske Spil tilbyder vi en underholdende &amp; sikker spil
  oplevelse. Vi vil gerne lige vise dig, hvordan du bedst vinder med
  dine yndlings hold.
</p>
<div className="Button_con">
  <button className="Modal_button" onClick={this.continue}>
    Start Tutorial
  </button>
  <div className="button_tip" />
</div>
</div> */
}
