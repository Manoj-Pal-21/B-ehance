import React from 'react';
import {withRouter} from 'react-router-dom';
import "./Form.css";

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name:"",
            email:"",
            password:"",
            isNameEmpty: "",
            isEmailEmpty: "",
            isPwdEmpty: ""
        }
    };

    handleInput = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
        console.log(event.target.name, event.target.value);
    };

    onSubmit = (event) => {
        event.preventDefault();
        if( this.state.name !== "" && this.state.email !== "" && this.state.password !== "" ){
            this.props.history.push("/login")
        } else {
            if(this.state.name === "") {
                this.setState({isNameEmpty: true});
            } else {
                this.setState({isNameEmpty: ""});
            };

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
        // console.log(this.state);
    }


    render() {
        return (
            <div className="container">
                <div className="app-wrapper">
                    <h2 className="title">Create Account</h2>
                    <div className="form-container">
                        <form className="form-wrapper">
                            <div className="name">
                                <label className="label">Full Name</label>
                                <input className="input" type="name" name="name" required="true" onChange={this.handleInput}/>
                                {
                                    this.state.isNameEmpty === true && 
                                    <span className="please-field">Please fill this field</span>
                                }
                            </div>
                            <div className="email">
                                <label className="label">Email</label>  
                                <input className="input" type="email" name="email" required="true" onChange={this.handleInput} />
                                {
                                    this.state.isEmailEmpty === true && 
                                    <span className="please-field">Please fill this field</span>
                                }
                            </div>
                            <div className="password">
                                <label className="label">Password</label>
                                <input className="input" type="password" name="password" required="true" onChange={this.handleInput} />
                                {
                                    this.state.isPwdEmpty === true && 
                                    <span className="please-field">Please fill this field</span>
                                }
                            </div>
                            <div>
                                <button className="submit" onClick={this.onSubmit}>
                                    SignUp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
export default withRouter(SignUp);
