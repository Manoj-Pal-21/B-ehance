import React from 'react';
import './Form.css';

class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
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
                                <input className="input" type="email" name="email" onClick={this.handleInput} />
                            </div>
                            <div className="password">
                                <label className="label">Password</label>
                                <input className="input" type="password" name="password" onClick={this.handleInput} />
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



export default Login;
