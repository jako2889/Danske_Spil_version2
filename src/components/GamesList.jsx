import React, { Component } from "react";
import yellowBox, { YellowBox } from "./YellowBox.jsx";

export class GamesList extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    // VARIBALE WIL BE SET DEPENDING ON STEP
    let yBox;
    let ybContent;

    // SETS STEP FOR CLICK AND  BORDER TURE / FALSE
    let stepTjek7;

    // STEP 7
    // ---------------------------------------------------
    if (this.props.step === 7) {
      ybContent = {
        title: "TURNERINGER",
        info: `Under hver spil katagori finder du de forskellige turneringer du kan spille på. Klik på <span class="hint">“ESL Pro League”</span> `,
        button: "on"
      };
      yBox = <YellowBox nextStep={this.props} ybContent={ybContent} />;

      stepTjek7 = true;
    }
    // -------------------------------------------------
    return (
      <article className="games">
        <ul>
          <li className="list_4">
            <div>
              <div className="list_4_txt">
                <div className="4_txt">Vinderspil</div>
              </div>
            </div>
          </li>
          <li
            className="list_4"
            onClick={stepTjek7 ? this.continue : undefined}
            style={
              stepTjek7 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <div>
              <div className="list_4_txt">
                <div className="4_txt">ESL Pro League</div>
              </div>
              {yBox}
            </div>
          </li>
          <li className="list_4">
            <div>
              <div className="list_4_txt">
                <div className="4_txt">ECS NA</div>
              </div>
            </div>
          </li>
          <li className="list_4">
            <div>
              <div className="list_4_txt">
                <div className="4_txt">ECS EU</div>
              </div>
            </div>
          </li>
          <li className="list_4">
            <div>
              <div className="list_4_txt">
                <div className="4_txt">UCC Summer Smash</div>
              </div>
            </div>
          </li>
        </ul>
      </article>
    );
  }
}

export default GamesList;
