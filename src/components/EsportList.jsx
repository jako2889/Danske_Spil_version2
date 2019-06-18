import React, { Component } from "react";
import arrowRight from "../assets/arrow_right.svg";
import yellowBox, { YellowBox } from "./YellowBox.jsx";
import { GamesList } from "./GamesList.jsx";

export class EsportList extends Component {
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

    let stepTjek6;
    let stepTjek7 = false;

    // STEP 6
    // ---------------------------------------------------
    if (this.props.step === 6) {
      ybContent = {
        title: "Counter-Strike GO",
        info: `Du kan bette på alle dine yndlingsspil. Klik på <span class="hint">“Counter-Strike GO"</span> `,
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );

      stepTjek5 = false;
      stepTjek6 = true;
    }
    // -------------------------------------------------

    // RENDER SUB LISTS

    let gameList;
    if (this.props.step > 6) {
      gameList = (
        <GamesList nextStep={this.props.nextStep} step={this.props.step} />
      );
      stepTjek7 = true;
    }

    return (
      <article className="esport">
        <ul>
          <li
            className="list_3"
            onClick={stepTjek6 ? this.continue : undefined}
            style={
              stepTjek6 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <div>
              <div className="list_3_txt">
                <div className="3_txt">Counter-Strike GO</div>
              </div>

              <div
                className="list_arrow"
                style={
                  stepTjek7
                    ? { transform: "rotate(90deg)" }
                    : { outline: "none" }
                }
              >
                <img src={arrowRight} />
              </div>
              {yBox}
            </div>
            {gameList}
          </li>

          <li className="list_3">
            <div>
              <div className="list_3_txt">
                <div className="3_txt">League of Legends</div>
              </div>

              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>

          <li className="list_3">
            <div>
              <div className="list_3_txt">
                <div className="3_txt">DOTA 2</div>
              </div>

              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>

          <li className="list_3">
            <div>
              <div className="list_3_txt">
                <div className="3_txt">World of Warcraft</div>
              </div>

              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>

          <li className="list_3">
            <div>
              <div className="list_3_txt">
                <div className="3_txt">Overwatch</div>
              </div>

              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>

          <li className="list_3">
            <div>
              <div className="list_3_txt">
                <div className="3_txt">Hearthstone</div>
              </div>

              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>

          <li className="list_3">
            <div>
              <div className="list_3_txt">
                <div className="3_txt">Starcraft</div>
              </div>

              <div className="list_arrow">
                <img src={arrowRight} />
              </div>
            </div>
          </li>

          <li className="list_3">
            <div className="list_3_con">
              <div className="list_3_txt">
                <div className="3_txt">Rainbow6</div>
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

export default EsportList;
