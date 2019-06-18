import React, { Component } from "react";
import "../css/mediaQ.scss";
import "../css/nav.scss";
import logo_1 from "../assets/logo_1.svg";
import logo_2 from "../assets/logo_2.svg";
import arrowDown from "../assets/arrow_down.svg";

export class Nav extends Component {
  render() {
    return (
      <div className="nav_con">
        <header className="nav_con_con">
          <div className="row_1">
            <div className="row_1_con">
              <div className="row_1_con_con">
                <div className="Logo_con">
                  <div className="logo">
                    <img src={logo_1} alt="logo" />
                  </div>
                </div>
                <div className="col_1">
                  <div>
                    <a href="#">Flere spil</a>
                    <div className="arrowDown">
                      <img src={arrowDown} alt="arrow down" />
                    </div>
                  </div>
                  <a href="#">Hjælp</a>
                  <a href="#">Om os</a>
                  <div className="data_list" onClick={this.props.showListSite}>
                    DATA LIST
                  </div>
                </div>
              </div>
              <div className="col_2_wrap">
                <div className="col_2">
                  <a href="#">Log Ind</a>
                  <a href="#">Opret konto</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row_2">
            <div className="row_2_con">
              <div className="logo2_con">
                <div className="logo2">
                  <img src={logo_2} alt="LOGO" />
                </div>
              </div>
              <div className="col">
                <div>
                  {" "}
                  <a href="#">TITEL</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt="arrown down" />
                  </div>
                </div>
                <div>
                  {" "}
                  <a href="#">LIVE</a>
                </div>
                <div>
                  {" "}
                  <a href="#">Måljagt</a>
                </div>
                <div>
                  {" "}
                  <a href="#">Oddset Inside</a>
                </div>
                <div>
                  {" "}
                  <a href="#">Managerspil</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt=" arrow down" />
                  </div>
                </div>
                <div>
                  {" "}
                  <a href="#">Kampagner</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt="arrow down" />
                  </div>
                </div>
                <div>
                  {" "}
                  <a href="#">Statistik</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt="arrow down" />
                  </div>
                </div>
                <div>
                  {" "}
                  <a href="#">Alt om Oddset</a>
                  <div className="arrowDown">
                    <img src={arrowDown} alt="arrow down" />
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>

          <div className="nav_ind">
            <div className="ni_logo">
              <img src={logo_1} alt="logo" />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Nav;
