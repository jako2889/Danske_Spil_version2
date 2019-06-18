import React, { Component } from "react";
import "../css/theGame.scss";
import joystick from "../assets/joystick.svg";
import GameSvg from "./GameSvg";
import { TweenMax, Back } from "gsap";

export class TheGame extends Component {
  // MAKE COUNTER / AFTER COUNTER ENDS GO TO NEXT STEP
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    console.log(this.props.nextStepAPP);

    // STEP 15
    // ---------------------------------------------------
    // let TheGameStep1;
    // if (this.props.step === 15) {
    //   TheGameStep1 = <TheGameStep1 />;
    // }
    // console.log(this.props.step);
    // -------------------------------------------------
    // STEP 16
    // ---------------------------------------------------
    // let TheGameStep2;
    // if (this.props.step === 16) {
    //   TheGameStep2 = <TheGameStep2 />;
    // }
    // -------------------------------------------------

    return (
      <div className="theGame_wrap">
        <div className="theGame_con">
          <div className="tg_head">
            <div className="tg_icon">
              <img src={joystick} alt="joystick icon" />
            </div>
            <div className="tg_league">ESL Pro League</div>
          </div>
          {this.props.step === 15 && <TheGameStep1 nextStep={this.props.nextStep} Kampvinder={this.props.Kampvinder} />}
          {this.props.step === 16 && (
            <TheGameStep2 Kampvinder={this.props.Kampvinder} nextStepAPP={this.props.nextStepAPP} />
          )}
        </div>
      </div>
    );
  }
}
export default TheGame;

export class TheGameStep1 extends Component {
  state = {
    AstralisScore: 0,
    LiquidScore: 0,
    count: 30,
    counterDeath: false,
    terrorDeath: false
  };
  constructor() {
    super();
    this.game = React.createRef();

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

    const gameRef = this.game.current;
    console.log("THIS IS GAME: ",gameRef);
    console.log(this.game.current.value);

    // GET CLICKED TEAM / WINNER FROM STATE
    let kampvinder = this.props.Kampvinder;
    console.log("Kamp vinder er: ", kampvinder);

    //TIMER DURING MATCH
    this.timeInterval = setInterval(() => {
      this.setState({
        count: this.state.count - 1
      })
    }, 500);

   // SET INTERVAL FOR TIME POINT IS SCORED AND SET TO CORRECT TEAM 
   this.PointTime = setInterval(() =>{
  
      if(kampvinder === "Astralis"){
        console.log("Astralis wins!");
        this.setState({
          AstralisScore: 1,
          counterDeath: true
        });
        console.log(this.state.counterDeath);
        clearInterval(this.PointTime);

      }else {
        console.log("Liquid wins!");
        this.setState({
          LiquidScore: 1,
          terrorDeath: true
        });
        console.log(this.state.terrorDeath);
        clearInterval(this.PointTime);
      }
      
      }, 7500);

      this.TeamWonStep = setInterval(() => {
        //CHANGE STEP
        this.props.nextStep();
        clearInterval(this.TeamWonStep);
      }, 15500);

  }
  render() {
    const count = this.state.count;
    return (
      <div ref={div => (this.myElement = div)} className="tg_s1_wrap">
        <div className="tg_s1_txt">
          Her ser du et fiktivt spil mellem <b>Astralis</b> &amp; <b>Liquid</b> <br /> Se om dit valgte hold<b> {this.props.Kampvinder}</b> vinder.
        </div>
        <div className="game_frame">
          <div className="team_counter_com">
            <div>
              <div>
                Astralis <span className="astralisScore">{this.state.AstralisScore}</span> - <span className="liquidScore">{this.state.LiquidScore}</span> Liquid
              </div>
              <div>Countdown: {count}</div>
            </div>
          </div>
          <div className="tg_svg_con">
            <GameSvg counterDeath={this.state.counterDeath} terrorDeath={this.state.terrorDeath} Kampvinder={this.props.Kampvinder} ref={this.game} />
          </div>
        </div>
      </div>
    );
  }
}

export class TheGameStep2 extends Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }
  state = {
    AstralisScore: 0,
    LiquidScore: 0
  };

  componentDidMount() {
    // use the node ref to create the animation
    this.myTween = TweenMax.from(this.myElement, 1, {
      y: 1100,
      ease: Back.easeOut.config(1.0002)
    });
    // GET CLICKED TEAM / WINNER FROM STATE
    let kampvinder = this.props.Kampvinder;
    console.log("Kamp vinder er: ", kampvinder);

    if(kampvinder === "Astralis"){
      console.log("Astralis wins!");
      this.setState({AstralisScore: 1});

    }else {
      console.log("Liquid wins!");
      this.setState({LiquidScore: 1});
    }

  }

  render() {
    return (
      <div ref={div => (this.myElement = div)} className="tg_s2_wrap">
        <div className="tg_s2_header">Tilykkke</div>
        <div className="result">
          Astralis <span>{this.state.AstralisScore}</span> - <span>{this.state.LiquidScore}</span> Liquid{" "}
        </div>

        <div className="tg_s2_txt">
          Tillykke med dit første succesfulde bet og en sejr til {this.props.Kampvinder}! Din
          gevinst på 250kr betting bonus er sendt med til din oprettelse af din
          danske spil konto.
        </div>
        <div className="gevinst_con">
          <div>250kr.</div>
          <div>BETTNG BONUS</div>
        </div>
        <button className="tg_s2_but" onClick={this.props.nextStepAPP}>
          OPET KONTO
        </button>
      </div>
    );
  }
}
