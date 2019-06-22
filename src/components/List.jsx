import React, { Component } from 'react';
import Nav  from "./nav";
import "../css/List.scss";

export class List extends Component {

// PREPARE STATE    
constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
        step: 1
    }
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
                isLoaded: true,
                items: data,
            })
        
            });
}

  render() {

// SET VARIABLES TO BE EQUAL TO STATE    
    let {isLoaded, items} = this.state;
    console.log(items);

    // CHECK IF DATA IS LOADED IF NOT RETURN LOADING DATA ELSE RETURN LIST OF EMAILS    
    if(!isLoaded) {
        return <div className="LoadingData">Loading data...</div>
    }else {
        return (
            <div className="list_wrapper">
            <Nav />
                <div className="list_container">
                    <div className="list">
                    <h1>Liste af info om brugere</h1>
                    <p>Hver bruger har en liste af oplysninger, som kan ses herunder.</p>
                    <div className="users">
                            {items.map(item => (
                                <div className="user">
                                <h3 key={this.state.id}>{item.userName}</h3>
                                <hr></hr>

                                <div className="user_field">
                                <p><b>Email:</b></p>    
                                <p key={this.state.id}>{item.email}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Brugernavn:</b></p>    
                                <p key={this.state.id}>{item.userName}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Cpr-nummer:</b></p>    
                                <p key={this.state.id}>{item.cpr}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Fornavn:</b></p>    
                                <p key={this.state.id}>{item.firstName}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Efternavn:</b></p>    
                                <p key={this.state.id}>{item.lastName}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Vejnavn:</b></p>    
                                <p key={this.state.id}>{item.streetName}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Husnummer:</b></p>    
                                <p key={this.state.id}>{item.houseNumber}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Postnummer:</b></p>    
                                <p key={this.state.id}>{item.postNumber}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Bynavn:</b></p>    
                                <p key={this.state.id}>{item.city}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Land:</b></p>    
                                <p key={this.state.id}>{item.country}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Telefonnummer:</b></p>    
                                <p key={this.state.id}>{item.phone}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Sikkerhedsspørgsmål:</b></p>    
                                <p key={this.state.id}>{item.securityQuestion}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Svar på spørgsmål:</b></p>    
                                <p key={this.state.id}>{item.securityAnswer}</p>
                                </div>
                                <div className="user_field">
                                <p><b>Max betting beløb:</b></p>    
                                <p key={this.state.id}>{item.maxBetting}</p>
                                </div>

                                </div>
                            ))};
                    </div>        
                    </div>
                </div>
            </div>            
            )
    }

    }

  }

export default List

