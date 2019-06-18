import React, { Component } from 'react';
import FormHeader from "./FormHeader";
import "../css/FormStyle.scss";
import NemidImage from "../assets/nemid.svg";
import { TweenMax, Back } from "gsap";

export class FormNemID extends Component {
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

    post = e => {
        e.preventDefault();
  

    // MAKE VALUES FROM STATE INTO STRING    
        const postData = JSON.stringify(this.props.values);

        console.log("THIS IS THE DATA ",postData);

    // FETCH DATABASE AND POST DATA STRING TO DATABASE
        fetch("https://volt3sem-11e6.restdb.io/rest/information", {
            method: "post",
            headers: {
             "Content-Type": "application/json; charset=utf-8",
             "x-apikey": "5ca21c32df5d634f46ecb11b",
             "cache-control": "no-cache"
            },
            body: postData
        })
        .then(res => res.json())
        .then(data => {
    
        console.log(data);
        
     });

    // GO TO NEXT STEP 
        this.props.nextStep(e);
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        // Make values a variable to destruct and just use the variable instead of props
        const { values, handleChange } = this.props;
        return (
            <div className="form_wrapper" ref={div => (this.myElement = div)}>
            <FormHeader step={this.props.step} />
                <form>
                    <div className="formIntroText">
                        <h1>Login med Nem ID</h1>
                        <p>Login med Nem ID for at kunne benytte penge til at spille.</p>
                    </div>

                    <img className="nemIDImg" src={NemidImage} alt="Nem ID"></img>
        
                     <div className="FormDoubleButtons">
                        <button onClick={this.back}>Back</button>
                        <button onClick={this.post}>Næste</button>
                    </div> 
    
                </form>
            </div>


        )
    }
}

export default FormNemID
