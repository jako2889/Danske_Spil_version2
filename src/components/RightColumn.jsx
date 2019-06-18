import React, { Component } from "react";
import "../css/rightCol.scss";
import arrowRight from "../assets/arrow_right.svg";
import infoIcon from "../assets/info.svg";
import deleteIcon from "../assets/delete.svg";
import yellowBox, { YellowBox } from "./YellowBox.jsx";
import { TweenMax, Back } from "gsap";

export class RightColumn extends Component {
  state = {
    sats: 0
  };

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
    this.props.nextStep();
  };

  satsInputContinue = function(e) {
    // console.log(e.target.value);
    e.preventDefault();

    if (e.target.value == 100) {
      this.continue();
    }
  };

  satsInput = function(e) {
    // console.log(e.target.value);
    this.setState({
      sats: e.target.value
    });

    // e.preventDefault();

    if (e.target.value == 100) {
      this.continue();
    }
  };

  render() {
    // VARIBALE WIL BE SET DEPENDING ON STEP
    let yBox;
    let ybContent;

    // SETS STEP FOR CLICK AND  BORDER TURE / FALSE
    let stepTjek12;

    // STEP 12
    // ---------------------------------------------------
    if (this.props.step === 12) {
      ybContent = {
        title: "Kupon",
        info: "Når du sætter et bet bliver det tilføjet til din kupon.",
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek12 = true;
    }
    // -------------------------------------------------

    // STEP 13
    let stepTjek13;
    // ---------------------------------------------------
    if (this.props.step === 13) {
      ybContent = {
        title: "Sats og vind",
        info: `Sats <span class="hint">100kr.</span> for at forsætte. Hvis du vinder, ganger vi dit beløb med det valgte odds. fx 100kr x 2,50 = 250kr.`,
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek13 = true;
    }
    // -------------------------------------------------

    // STEP 14
    let stepTjek14;
    // ---------------------------------------------------
    if (this.props.step === 14) {
      ybContent = {
        title: "Køb spil",
        info: `Klik på <span class="hint">“Køb spil”</span> og se et fiktivt spil på det bet du har lavet.`,
        button: "on"
      };
      yBox = (
        <YellowBox
          nextStep={this.props}
          ybContent={ybContent}
          step={this.props.step}
        />
      );
      stepTjek14 = true;
    }
    // -------------------------------------------------
    console.log(this.props.Kampvinder);
    console.log("HALOOOO");
    return (
      <article className="right_column" ref={div => (this.myElement = div)}>
        <div
          style={
            stepTjek12 ? { outline: "2px solid orange" } : { outline: "none" }
          }
        >
          <div className="kupon_con">
            <div className="Kupon"> Kupon(1)</div>
            <div className="aktive">Aktive spil (0)</div>
            {this.props.step === 12 && yBox}
          </div>
          <div className="valgteSpil">
            <div>Valgte Spil(1)</div>
            <div>
              <img
                src={arrowRight}
                style={{ transform: "rotate(90deg)" }}
                alt="arrow Icon"
              />
            </div>
          </div>
          <div className="kupon_sats">
            <div>
              <div>Astralis - Liquid</div>
              <div className="r_col_icon">
                <img src={infoIcon} alt="info icon" />
              </div>
            </div>
            <div>Kampvinder</div>

            <div
              style={
                stepTjek13
                  ? { outline: "2px solid orange" }
                  : { outline: "none" }
              }
            >
              <div>{this.props.Kampvinder}</div>
              <div className="ods_sats">
                <div>2,50</div>
                <form action="#">
                  <input
                    type="text"
                    id="sats_input"
                    placeholder={"0kr."}
                    onChange={
                      stepTjek13 ? this.satsInput.bind(this) : undefined
                    }
                  />
                </form>
                <div className="r_col_icon">
                  <img src={deleteIcon} alt="delete icon" />
                </div>
              </div>
            </div>
            {this.props.step === 13 && yBox}
            <div>Mulig gevinst: {this.state.sats * 2.5}kr.</div>
          </div>
          <div
            className="samlet_gevinst"
            style={
              stepTjek14 ? { outline: "2px solid orange" } : { outline: "none" }
            }
          >
            <div className="samlet_insats_gevinst">
              {this.props.step === 14 && yBox}

              <div>
                <div>Samlet indsats:</div>
                <div>{this.state.sats}kr.</div>
              </div>
              <div>
                <div>Mulig gevinst i alt:</div>
                <div>{this.state.sats * 2.5}kr.</div>
              </div>
            </div>
            <div className="slet">
              <div>
                <div>Slet vaglte spil</div>
                <div className="r_col_icon">
                  <img src={deleteIcon} alt="delete icon" />
                </div>
              </div>
            </div>
            <div className="koeb_spil_con">
              <button
                className="koeb_knap"
                onClick={stepTjek14 ? this.continue : undefined}
              >
                Køb Spil
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default RightColumn;
