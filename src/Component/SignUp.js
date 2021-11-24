import React from 'react'
import "./Form.css";

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            email:"",
            password:""
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
        console.log(this.state);
        this.props.history.push("/Login");
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
                                <input className="input" type="name" name="name" onChange={this.handleInput}/>
                            </div>
                            <div className="email">
                                <label className="label">Email</label>
                                <input className="input" type="email" name="email" onChange={this.handleInput} />
                            </div>
                            <div className="password">
                                <label className="label">Password</label>
                                <input className="input" type="password" name="password" onChange={this.handleInput} />
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



export default SignUp
