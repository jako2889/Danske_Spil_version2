import React, { Component } from 'react';
import { TweenMax, Back } from "gsap";
import "../css/Errorbox.scss";

export class Errorbox extends Component {
    // constructor(props) {
    //     super(props);
    //     // reference to the DOM node
    //     this.myElement = null;
    //     // reference to the animation
    //     this.myTween = null;
    //   }
    
    //   componentDidMount() {
    //     // use the node ref to create the animation
    //     this.myTween = TweenMax.to(this.myElement, 0.2, {
    //       scale: 1,
    //       delay: 0.5,
    //       transformOrigin: "center left"
    //     });
    //   }
    render() {
        return (
            <div className="errorbox_wrapper">
                <div className="errorbox_con">
                    <p>Du mangler at indtaste dine oplysninger.</p>
                </div>
            </div>
        )
    }
}

export default Errorbox
