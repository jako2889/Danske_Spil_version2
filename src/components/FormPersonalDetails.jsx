import React, { Component } from 'react';
import FormHeader from "./FormHeader";
import "../css/FormStyle.scss";
import { TweenMax, Back } from "gsap";

export class FormPersonalDetails extends Component {
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

    continue = e => {
        e.preventDefault();
        this.props.handleSubmitPersonal(e);
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        // Make values a variable to destruct and just use the variable instead of props
        const { values, handleChange, formErrors } = this.props;
        let nextError = this.props.nextError;
        console.log(nextError);
        let buttonStyle = {};

        if(nextError === true) {
            buttonStyle = {
                background: "#80808087",
                borderColor: "#80808087",
                transition: "1s"
            };
        }else {
            buttonStyle = {
                background: "#feb700",
                borderColor: "#feb700",
                transition: "1s"
            };
        }

        console.log(formErrors);
        return (
            <div className="form_wrapper" ref={div => (this.myElement = div)}>
            <FormHeader step={this.props.step} />
                <form>
                    <div className="formIntroText">
                        <h1>Dine informationer</h1>
                        <p>Vi skal vide lidt om dig, inden du kan oprette din konto.</p>
                    </div>
                    
                    <div className="inputStyle">
                    <input name="cpr" type="text" pattern="[0-9]+" placeholder="Cpr-nummer"
                     onChange={handleChange("cpr")}
                     defaultValue={values.cpr}
                     required
                     ></input> 
                    <label>Cpr-nummer</label>
                    {formErrors.cpr.length > 0 && (
                    <span className="errorMessage">{formErrors.cpr}</span>
                )}
                </div>
    
                    <div className="inputStyle">
                    <input name="firstName" type="text" placeholder="Fornavn"
                     onChange={handleChange("firstName")}
                     defaultValue={values.firstName}
                     required
                     ></input> 
                    <label>Fornavn</label> 
                    {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                )}
                    </div>
    
                    <div className="inputStyle">
                    <input name="lastName" type="text" placeholder="Efternavn"
                     onChange={handleChange("lastName")}
                     defaultValue={values.lastName}
                     required
                     ></input> 
                     <label>Efternavn</label> 
                     {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                )}
                     </div>
    
                    <div className="doubleInputfield1">
                        <div className="inputStyle">
                            <input name="streetName" type="text" placeholder="Vejnavn"
                            onChange={handleChange("streetName")}
                            defaultValue={values.streetName}
                            required
                            ></input> 
                            <label>Vejnavn</label>
                            {formErrors.streetName.length > 0 && (
                    <span className="errorMessage">{formErrors.streetName}</span>
                )}
                        </div>   
                        <div className="inputStyle">
                            <input name="houseNumber" type="text" placeholder="Husnummer"
                            onChange={handleChange("houseNumber")}
                            defaultValue={values.houseNumber}
                            required
                            ></input> 
                            <label>Husnummer</label>
                            {formErrors.houseNumber.length > 0 && (
                    <span className="errorMessage">{formErrors.houseNumber}</span>
                )}
                        </div>   
                     </div> 

                     <div className="doubleInputfield2">
                     <div className="inputStyle">
                            <input name="city" type="text" placeholder="Bynavn"
                            onChange={handleChange("city")}
                            defaultValue={values.city}
                            required
                            ></input> 
                            <label>Bynavn</label>
                            {formErrors.city.length > 0 && (
                    <span className="errorMessage">{formErrors.city}</span>
                )}
                        </div>  
                        <div className="inputStyle">
                            <input name="postNumber" type="text" pattern="[0-9]+" placeholder="Postnummer"
                            onChange={handleChange("postNumber")}
                            defaultValue={values.postNumber}
                            required
                            ></input> 
                            <label>Postnummer</label>
                            {formErrors.postNumber.length > 0 && (
                    <span className="errorMessage">{formErrors.postNumber}</span>
                )}
                        </div>    
                     </div> 
                     <select name="country" className="countrySelect" onChange={handleChange("country")}
                    defaultValue={values.country}>
                            <option value="">Land</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos Islands">Cocos Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Malta">Malta</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Norway">Norway</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Vietnam</option>
                    </select>
                    {formErrors.country.length > 0 && (
                    <span className="errorMessage">{formErrors.country}</span>
                )}

                    <div className="inputStyle">
                    <input name="phone" type="text" pattern="[0-9]+" placeholder="Telefonnummer"
                     onChange={handleChange("phone")}
                     defaultValue={values.phone}
                     required
                     ></input> 
                    <label>Telefonnummer</label> 
                    {formErrors.phone.length > 0 && (
                    <span className="errorMessage">{formErrors.phone}</span>
                )}
                    </div>

                    <div className="FormDoubleButtons">
                    <button onClick={this.back}>Back</button>
                    <button style={buttonStyle} onClick={this.continue}>Næste</button>
                    </div> 
                    {nextError === true ? <div className="errorText">Du mangler at indfylde felter.</div> : ""}   
                </form>
            </div>

        )
    }
}

export default FormPersonalDetails
