import React, { Component } from 'react';
import "../css/FormHeader.scss";

export class FormHeader extends Component {
  render() {
    let step = this.props.step;
    console.log(step);

    // VARIABLES FOR CHECKING IF STEP IS TRUE OR FALSE ACORDING TO CURRENT STEP FOR STYLING
    let progresStep1 = false;
    let progresStep2 = false;
    let progresStep3 = false;
    let progresStep4 = false;


    // SETTING  VARIABLE TRUE IF CURRENT STEP IS TRUE
    if(step ===  1) {
    
        progresStep1 = true;    

    }else if(step === 2) {

        progresStep1 = true;  
        progresStep2 = true;  

    }
    else if(step === 3) {

        progresStep1 = true;  
        progresStep2 = true;  
        progresStep3 = true;  
        
    }
    else if(step === 4) {

        progresStep1 = true;  
        progresStep2 = true;  
        progresStep3 = true;
        progresStep4 = true;  
        
    }
    return (
      <div className="formHeader_con">
        <h1>Blå konto</h1>
        <p><b>Danske Licens Spil A/S:</b> Oddset, eOddset, Tips, Dantoto, Casino, Live Casino, Spillehjørnet, Zezam, Poker, Bingo</p>
      
        <div className="formProgressIndicator">
        <div
          className="progress1"
          style={
            progresStep1 ? { background: "#feb700" } : { background: "#E4E4E4" }
          }
          >1</div>
        <div
         className="Line1"
         style={
            progresStep2 ? { background: "#feb700" } : { background: "#E4E4E4" }
          }
         ></div>

        <div
         className="progress2"
         style={
            progresStep2 ? { background: "#feb700" } : { background: "#E4E4E4" }
          }
         >2</div>
        <div
         className="Line2"
         style={
            progresStep3 ? { background: "#feb700" } : { background: "#E4E4E4" }
          }
         ></div>

        <div
         className="progress3"
         style={
            progresStep3 ? { background: "#feb700" } : { background: "#E4E4E4" }
          }
         >3</div>
        <div
         className="Line3"
         style={
            progresStep4 ? { background: "#feb700" } : { background: "#E4E4E4" }
          }
         ></div>

        <div 
        className="progress4"
        style={
            progresStep4 ? { background: "#feb700" } : { background: "#E4E4E4" }
          }
        >4</div>
        </div>
      </div>
    )
  }
}

export default FormHeader
