import React from 'react';
import {withRouter} from 'react-router-dom';
import './Form.css';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            isEmailEmpty: "",
            isPwdEmpty: ""
        }
    };

    handleInput = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
        console.log(event.target.name, event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        if(this.state.email !== "" && this.state.password !== "" ){
            this.props.update(true);
            this.props.history.push("/");
        } else{
            if(this.state.email === "") {
                this.setState({isEmailEmpty: true});
            } else {
                this.setState({isEmailEmpty: ""});
            };
    
            if(this.state.password === "") {
                this.setState({isPwdEmpty: true});
            } else {
                this.setState({isPwdEmpty: ""});
            };
        }
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
                                {
                                    this.state.isEmailEmpty === true && 
                                    <span className="please-field">Please fill this field</span>
                                }
                            </div>
                            <div className="password">
                                <label className="label">Password</label>
                                <input className="input" type="password" name="password" onChange={this.handleInput} />
                                {
                                    this.state.isPwdEmpty === true && 
                                    <span className="please-field">Please fill this field</span>
                                }
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
