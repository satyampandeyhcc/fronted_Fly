import React, { Component } from 'react'
import "../App.css";
import axios from 'axios';
import ReactDOM from "react-dom";

class Evaluator extends Component {
    constructor(props) {
        super(props);
        this.containerEl = document.createElement('div');
        this.externalWindow = null;
        this.state = {
            dbMessage: null,
           
        }
    }
    setUpDb = () => {
        console.log("setup method called")
        this.setState({ dbMessage: null })
        axios.get("https://flighthaven.onrender.com/setupDb").then(response => {
            console.log(response);
            this.setState({ dbMessage: response.data })
        }).catch(error => error.response.data.message)
    }

   

   

    render() {
        return (
            <div>
                {/* Message at the top after db setup */}
                {this.state.dbMessage ? (
                    <div className="col-md-5 offset-3">
                        <div className="alert alert-info alert-dismissible" id="alert">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>{this.state.dbMessage}</strong>
                        </div>
                    </div>
                ) : null}

                {/* Displays the button at the bottom right corner */}
                <div className="adminActions">
                    <input type="checkbox" name="adminToggle" className="adminToggle" />
                    <a className="adminButton" href="#!"><img src="assets/test.png" alt="admin button comes here" height="60vw" width="60vw" /></a>
                    <div className="adminButtons">
                        <a title="Setup DB" href="#!" onClick={this.setUpDb}><img src="./assets/db.png" alt="setup button comes here" height="27px" width="30px" /></a>
                    </div>
                </div>
                
     
            </div>

        )
    }
}


export default Evaluator;