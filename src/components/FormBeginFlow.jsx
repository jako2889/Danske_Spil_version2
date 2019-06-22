import React, { Component } from 'react';
import FormAccountDetails from "./FormAccountDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormSecurityDetails from "./FormSecurityDetails";
import FormNemID from "./FormNemID";
import FormSucces from "./FormSucces";


export class FormBeginFlow extends Component {
    state = {
        step: 1,
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
        cpr: "",
        firstName: "",
        lastName: "",
        streetName: "",
        houseNumber: "",
        postNumber: "",
        city: "",
        country: "",
        phone: "",
        securityQuestion: "",
        securityAnswer: "",
        maxBetting: "",
        formErrors: {
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",
            cpr: "",
            firstName: "",
            lastName: "",
            streetName: "",
            houseNumber: "",
            postNumber: "",
            city: "",
            country: "",
            phone: "",
            securityQuestion: "",
            securityAnswer: "",
            maxBetting: ""
        },
        nextError: false,
        userData: [],
        userEmailError: false
    }

    componentDidMount() {
        // FETCH DATABASE AND POST DATA STRING TO DATABASE
        fetch("https://volt3sem-11e6.restdb.io/rest/information", {
           method: "get",
           headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5ca21c32df5d634f46ecb11b",
            "cache-control": "no-cache"
           }
       })
       .then(res => res.json())
       .then(data => {

   // SET STATE TO BE EQUAL TO DATA
       this.setState({
           userData: data,
       })

       console.log(this.state.userData);
       });
}

    // PROCEED TO NEXT STEP
    nextStep = (e) => {
        e.preventDefault();

        //WHEN TRYING TO GO TO NEXT STEP CHECK IF EMAIL IS ALREADY IN USE
        let {email, userName, password, confirmPassword} = this.state;
        //MAKE USER DATA FROM DATABASE INTO VARIABLE AND MAP THROUGH DATA TO FIND EMAILS
        let userData = this.state.userData;
        console.log("THIS IS THE USER DATA: ", userData);
        let userEmailCheck = userData.map((user => {
            return email  === user.email && true;
        }));
        console.log("EMAILS IS SAME AS DATA EMAIL: ",userEmailCheck);
        
        //LOOP THROUGH AND CHECK IF ANY IS TRUE IF TRUE PASS TRUE IF ELSE PASS FALSE
        let checkAnyEmailTrue = userEmailCheck.some(function (item) {
            return item === true;
        });
        console.log("IS INPUT EMAIL SAME AS DATA EMAIL?",checkAnyEmailTrue);

        if(checkAnyEmailTrue === true || password !== confirmPassword) {
            console.log("EMAIL IS INCORRECT - ALREADY IN USE");
            console.log("Password is not the same", password, confirmPassword);
            //SET STATE
            this.setState({ userEmailError: true }, function () {
                console.log(this.state.userEmailError);
           });
            //CALL CURRENT STEP
            this.currentStep(e);

        }else if(checkAnyEmailTrue === false && password === confirmPassword) {
            console.log("EMAIL IS FINE");
            //CALL NEXT STEP
            const { step } =  this.state;
            this.setState({
                step: step + 1
            });
            //SET STATE
            this.setState({userEmailError: false});
    }


    }

    // BACK TO PREVIOUS STEP
    prevStep = () => {
        const { step } =  this.state;
        this.setState({
            step: step - 1
        });
        //CHANGE STATE SO ERROR MESSAGE DOESNT SHOW WHEN GOING BACK TO PREV STEP
        this.setState({nextError: false});
    }
    currentStep = () => {
        const { step } =  this.state;
        this.setState({
            step: step
        });
    }

    handleChange = input => e => {
// HANDLE FIELDS INPUT CHANGE   
        this.setState({[input]: e.target.value});
        // CHANGE STATE IF USER TYPES IN INPUT FIELDS "AFTER" TRYING TO CLICK NEXT WHEN NOT FINISHED
        this.setState({nextError: false});
        this.setState({userEmailError: false});


//FOR EACH INPUT MAKE VALIDATION CHECK WITH SWITCH SYNC WITH NAME ATTRIBUTE IN INPUT
        const {name, value} = e.target;
        //MAKE VARIALBE THAT TAKES EMPTY ARRAY FORM ERROR VALUES FROM STATE
        let formErrors = this.state.formErrors;

        console.log("Name: ", name);
        console.log("value: ", value);

        //EACH CASE SETS EACH VALUE FROM FORMERROR TO SHOW AN ERROR MESSAGE IF CONDITIONS IS MET
        switch (name) {
            case "email":
                formErrors.email =
                value.length < 3 && value.length > 0 ? "Din email skal vi bruge, så du kan modtage vinderbeskeder, når du vinder i spil."
                : "";
                break;
            case "userName":
                formErrors.userName =
                value.length < 6 && value.length > 0 ? "Dit brugernavn skal være mere end 6 bogstaver langt."
                : "";
                break;
            case "password":
                formErrors.password =
                value.length < 6 && value.length > 0 ? "Din adgangskode skal være mere end 6 bogstaver langt."
                : "";
                break;
            case "confirmPassword":
                formErrors.confirmPassword =
                value.length < 6 && value.length > 0 ? "Din adgangskode skal være mere end 6 bogstaver langt."
                : "";
                break;
            case "cpr":
                formErrors.cpr =
                value.length < 10 && value.length > 0 ? "Vi skal bruge dit cpr-nummer for at sikre os, at du er over 18 år."
                : "";
                break;
            case "firstName":
                formErrors.firstName =
                value.length < 3 && value.length > 0 ? "Indtast dit fulde fornavn. Husk eventuelle mellemnavne."
                : "";
                break;
            case "lastName":
                formErrors.lastName =
                value.length < 3 && value.length > 0 ? "Indtast dit fulde efternavn."
                : "";
                break;
            case "streetName":
                formErrors.streetName =
                value.length < 3 && value.length > 0 ? "Indtast navnet på vejen du bor på."
                : "";
                break;
            case "postNumber":
                formErrors.postNumber =
                value.length < 3 && value.length > 0 ? "Indtast postnr. du bor i."
                : "";
                break;
            case "city":
                formErrors.city =
                value.length < 3 && value.length > 0 ? "Indtast navnet på din by."
                : "";
                break;
            case "country":
                formErrors.country =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "phone":
                formErrors.phone =
                value.length < 3 && value.length > 0 ? "Dit telefonnummer skal vi bruge til fx at sende vinderbeskeder."
                : "";
                break;
            case "securityQuestion":
                formErrors.securityQuestion =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
            case "securityAnswer":
                formErrors.securityAnswer =
                value.length < 3 && value.length > 0 ? "Vælg et svar der passer til dit spørgsmål overfor."
                : "";
                break;
            case "maxBetting":
                formErrors.maxBetting =
                value.length < 3 && value.length > 0 ? "More than zero characters required"
                : "";
                break;
                default:
                break;
        }

    }
    handleSubmitAccount = e => {
        e.preventDefault();

        console.log(e);
        let {email, userName, password, confirmPassword} = this.state;
        let accountValues = [email, userName, password, confirmPassword];
        console.log("This is accountvalues: ",accountValues);
        console.log("STATE EMAIL",email);

        console.log(password, confirmPassword);

        //MAKE VARIALBE THAT ITERATE WITH MAP THROUGH ACCVALUES AND SETS VALUE TO TRUE IF STRING IS EMPTY
        let check = accountValues.map((value => {
            return "" === value && true;
          }));

        console.log("STRING VALUE IS: ",check);
        //LOOP THROUGH AND CHECK IF ANY IS TRUE IF TRUE PASS TRUE IF ELSE PASS FALSE
        let realCheck = check.some(function (item) {
            return item === true;
        });

        console.log("IS THERE AN ERROR IN ANY INPUT?",realCheck);
        if(realCheck === true) {
                console.log("ERROR IN INPUT", realCheck);
                
                 //CALL CURRENT STEP
                 this.currentStep(e);
                 //ALERT TEMPORARY
                 this.setState({
                     nextError: true,
                    password: "",
                    confirmPassword: ""
                    });
        }else {
                console.log("NO ERRORS IN INPUT");
                //CALL NEXT STEP
                this.nextStep(e);
                this.setState({nextError: false,});
        }

    }
    handleSubmitPersonal = e => {
        e.preventDefault();

        console.log(e);
        // VALUES SHOULD BE AN ARRAY
        let {cpr, firstName, lastName, streetName, houseNumber, postNumber, city, country, phone} = this.state;
        let personalValues = [cpr, firstName, lastName, streetName, houseNumber, postNumber, city, country, phone];
        console.log("This is personalValues: ",personalValues);

                //MAKE VARIALBE THAT ITERATE WITH MAP THROUGH ACCVALUES AND SETS VALUE TO TRUE IF STRING IS EMPTY
                let check = personalValues.map((value => {
                    return "" === value && true;
                  }));
        
                console.log("STRING VALUE IS: ",check);
                //LOOP THROUGH AND CHECK IF ANY IS TRUE IF TRUE PASS TRUE IF ELSE PASS FALSE
                let realCheck = check.some(function (item) {
                    return item === true;
                });
        
                console.log("IS THERE AN ERROR IN ANY INPUT?",realCheck);
                if(realCheck === true) {
                        console.log("ERROR IN INPUT");
                         //CALL CURRENT STEP
                         this.currentStep(e);
                        //ALERT TEMPORARY
                        this.setState({nextError: true});
                }else {
                        console.log("NO ERRORS IN INPUT");
                        //CALL NEXT STEP
                        this.nextStep(e);
                        this.setState({nextError: false});
                }

    }
    handleSubmitSecurity = e => {
        e.preventDefault();

        console.log(e);
        // VALUES SHOULD BE AN ARRAY
        let {securityQuestion, securityAnswer, maxBetting} = this.state;
        let securityValues = [securityQuestion, securityAnswer, maxBetting];
        console.log("This is securityValues: ",securityValues);

                        //MAKE VARIALBE THAT ITERATE WITH MAP THROUGH ACCVALUES AND SETS VALUE TO TRUE IF STRING IS EMPTY
                        let check = securityValues.map((value => {
                            return "" === value && true;
                          }));
                
                        console.log("STRING VALUE IS: ",check);
                        //LOOP THROUGH AND CHECK IF ANY IS TRUE IF TRUE PASS TRUE IF ELSE PASS FALSE
                        let realCheck = check.some(function (item) {
                            return item === true;
                        });
                
                        console.log("IS THERE AN ERROR IN ANY INPUT?",realCheck);
                        if(realCheck === true) {
                                console.log("ERROR IN INPUT");
                                 //CALL CURRENT STEP
                                 this.currentStep(e);
                                 //ALERT TEMPORARY
                                 this.setState({nextError: true});
                        }else {
                                console.log("NO ERRORS IN INPUT");
                                //CALL NEXT STEP
                                this.nextStep(e);
                                this.setState({nextError: false});
                        }

    }


    render() {
        // DECONSTRUCT STATE
        const { step } = this.state;
        const { email, userName, password, confirmPassword, cpr, firstName, lastName, streetName, houseNumber, postNumber, city, country, phone, securityQuestion, securityAnswer, maxBetting} = this.state;
        const values = { email, userName, password, confirmPassword, cpr, firstName, lastName, streetName, houseNumber, postNumber, city, country, phone, securityQuestion, securityAnswer, maxBetting};

        switch(step) {
            case 1:
                return (
                    <FormAccountDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    step={this.state.step}
                    formErrors={this.state.formErrors}
                    handleSubmitAccount={this.handleSubmitAccount}
                    nextError={this.state.nextError}
                    userEmailError={this.state.userEmailError}
                    />
                )
            case 2:
                return <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                formErrors={this.state.formErrors}
                handleSubmitPersonal={this.handleSubmitPersonal}
                nextError={this.state.nextError}
                />
            case 3:
                return <FormSecurityDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                formErrors={this.state.formErrors}
                handleSubmitSecurity={this.handleSubmitSecurity}
                nextError={this.state.nextError}

                />
            case 4:
                return <FormNemID
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                step={this.state.step}
                handleSubmit={this.handleSubmit}
                />
            case 5:
                return <FormSucces
                handleChange={this.handleChange}
                values={values}
                />
        }
    }
}

export default FormBeginFlow
