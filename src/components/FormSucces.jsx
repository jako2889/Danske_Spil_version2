import React, { Component } from 'react';
import FormFooter from "./FormFooter";
import "../css/FormSucces.scss";
import Banner from "../assets/Esport_banner-01.jpg";
import { TweenMax, Back } from "gsap";

export class FormSucces extends Component {
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
      x: 1100,
      ease: Back.easeOut.config(1.0002)
    });
  }

  render() {
        // Make values a variable to destruct and just use the variable instead of props
        const { values, handleChange } = this.props;
    return (

      <div className="succes_site_wrapper" ref={div => (this.myElement = div)}>
          
          <img className="succesBanner" src={Banner} alt="Banner"></img>

      <div className="succes_content_wrapper">

        <div className="succes_con">

              <div className="succesText">
                  <h1>Bekræftet Blå Konto</h1>
                  <p>Tillykke med oprettelsen af din Blå Konto. Du er nu klar til at benytte alle vores spil hos Danske Spil. Du vil havde modtaget en email bekræftelse med din Danske Spil bonus! Følg enten linket i banneret eller gå til din nye konto. </p>
              </div>
  
               <div className="FormDoubleButtons">
                  <button className="succesButton">GÅ TIL KONTO</button>
              </div> 
              <FormFooter />
      </div>        

      </div>
      </div>
    )
  }
}

export default FormSucces
