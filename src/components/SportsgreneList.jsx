import React, { Component } from "react";
import arrowRight from "../assets/arrow_right.svg";
import yellowBox, { YellowBox } from "./YellowBox.jsx";
import { EsportList } from "./EsportList.jsx";

import football from "../assets/football.svg";
import tennis from "../assets/tennis.svg";
import basket from "../assets/basket.svg";
import gaming from "../assets/gaming.svg";
import puck from "../assets/puck.svg";

class SportsgreneList extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    // VARIBALE WIL BE SET DEPENDING ON STEP
    let yBox;
    let ybContent;

    // SETS STEP FOR CLICK AND  BORDER TURE / FALSE

    let stepTjek5;
    let stepTjek6 = false;

    // STEP 5
    // ---------------------------------------------------
    if (this.props.step === 5) {
      ybContent = {
        title: "ESPORT",
        info: `Her ser du alle de sportsgrene du kan spille på. Klik på <span class="hint">"ESPORT"</span> `,
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );

      stepTjek5 = true;
    }
    // -------------------------------------------------

    // RENDER SUB LISTS
    let eSport;
    if (this.props.step > 5) {
      eSport = (
        <EsportList nextStep={this.props.nextStep} step={this.props.step} />
      );
      stepTjek6 = true;
    }
    return (
      <article className="sportsGrene">
        <ul>
          <li className="list_2">
            <div>
              <div className="list_2_txt">
                <div className="sport_icon">
                  <img src={football} />
                </div>
                <div className="2_txt">Fodbold</div>
              </div>
              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>
          <li className="list_2">
            <div>
              <div className="list_2_txt">
                <div className="sport_icon">
                  <img src={puck} />
                </div>
                <div className="2_txt">Ishockey</div>
              </div>
              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>
          <li className="list_2">
            <div>
              <div className="list_2_txt">
                <div className="sport_icon">
                  <img src={tennis} />
                </div>
                <div className="2_txt">Tennis</div>
              </div>
              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>
          <li
            className="list_2"
            onClick={stepTjek5 ? this.continue : undefined}
            style={
              stepTjek5 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <div>
              <div className="list_2_txt">
                <div className="sport_icon">
                  <img src={gaming} />
                </div>
                <div className="2_txt">Esport</div>
              </div>
              <div
                className="list_arrow"
                style={
                  stepTjek6
                    ? { transform: "rotate(90deg)" }
                    : { outline: "none" }
                }
              >
                <img src={arrowRight} />
              </div>
              {yBox}
            </div>
            {eSport}
          </li>
          <li className="list_2">
            <div className="list_2_con">
              <div className="list_2_txt">
                <div className="sport_icon">
                  <img src={basket} />
                </div>
                <div className="2_txt">BasketBall</div>
              </div>
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

export default SportsgreneList;
