import React, { Component } from "react";
import arrowRight from "../assets/arrow_right.svg";
import SportsgreneList from "./SportsgreneList.jsx";
import yellowBox, { YellowBox } from "./YellowBox.jsx";
import "../css/leftCol.scss";
import { TweenMax, Back } from "gsap";

// ICONS
import search from "../assets/search.svg";

class LeftColumn extends Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount() {
    // use the node ref to create the animation
    this.myTween = TweenMax.from(this.myElement, 1, {
      y: 1100,
      ease: Back.easeOut.config(1.0002)
    });
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    // VARIBALE WIL BE SET DEPENDING ON STEP
    let sport;
    let yBox;
    let ybContent;

    // SETS STEP FOR CLICK AND  BORDER TURE / FALSE
    let stepTjek2;
    let stepTjek3;
    let stepTjek4;
    let stepTjek5 = false;

    // STEP 2
    // ---------------------------------------------------
    if (this.props.step === 2) {
      ybContent = {
        title: "Søg",
        info: "Her kan du søge efter væddemål, sportgrene, turneringer, etc. Klik næste for at forsætte.",
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek2 = true;
    }
    // -------------------------------------------------
    // STEP 3
    // ---------------------------------------------------
    if (this.props.step === 3) {
      ybContent = {
        title: "FAVORITTER",
        info: "Her finder du alle de spil du har tilføjet til dine favoritter.",
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek3 = true;
      stepTjek2 = false;
    }
    // -------------------------------------------------

    // STEP 4
    // ---------------------------------------------------
    if (this.props.step === 4) {
      ybContent = {
        title: "SPORTSGRENE",
        info: `Klik på <span class="hint">“SPORTSGRENE"</span>`,
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek3 = false;
      stepTjek2 = false;
      stepTjek4 = true;
    }
    // -------------------------------------------------

    // RENDER SUB LISTS
    if (this.props.step > 4) {
      sport = (
        <SportsgreneList
          nextStep={this.props.nextStep}
          step={this.props.step}
        />
      );

      stepTjek5 = true;
    }

    console.log(this.props.step);

    return (
      <article className="left_column" ref={div => (this.myElement = div)}>
        <div>
          <div
            className="search"
            style={
              stepTjek2 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <div>
              <div className="seachIcon">
                <img src={search} />
              </div>
            </div>
          </div>
          {this.props.step === 2 && yBox}
        </div>
        <ul className="left_column_list">
          <li
            className="list_1"
            style={
              stepTjek3 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <div>
              <div className="list_1_txt">Mine Favoritter ({0})</div>
              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
              {this.props.step === 3 && yBox}
            </div>
          </li>
          <li className="list_1">
            <div className="list_1_con">
              <div className="list_1_txt">Genveje</div>
              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>
          <li
            className="list_1"
            onClick={stepTjek4 ? this.continue : undefined}
            style={
              stepTjek4 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <div>
              <div className="list_1_txt">Sportsgrene</div>
              <div
                className="list_arrow"
                style={
                  stepTjek5
                    ? { transform: "rotate(90deg)" }
                    : { outline: "none" }
                }
              >
                <img src={arrowRight} />
              </div>
              {this.props.step === 4 && yBox}
            </div>
            {sport}
          </li>
          <li className="list_1">
            <div>
              <div className="list_1_txt">Resultater</div>
              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>
        </ul>
      </article>
    );
  }
}

export default LeftColumn;

{
  /*  

{
  /* <YellowBox nextStep={this.props} ybContent={ybContent} /> */
}

// const ybContent = {
//   title: "SPORTSGRENE",
//   info: `Click på “SPORTSGRENE" `,
//   button: "on"
// };
