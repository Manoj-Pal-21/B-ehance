import React from 'react';
import {withRouter} from 'react-router-dom';
import './Form.css';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    };

    handleInput = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
        console.log(event.target.name, event.target.value);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.history.push("/");
    }




    render() {
        return (
            <div className="container">
                <div className="app-wrapper">
                    <h2 className="title">login</h2>
                    <div className="form-container">
                        <form className="form-wrapper">
                            <div className="email">
                                <label className="label">Email</label>
                                <input className="input" type="email" name="email" onChange={this.handleInput} />
                            </div>
                            <div className="password">
                                <label className="label">Password</label>
                                <input className="input" type="password" name="password" onChange={this.handleInput} />
                            </div>
                            <div>
                                <button className="submit" onClick={this.handleSubmit}>
                                    Signin
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}



export default withRouter(Login);
