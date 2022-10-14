import React from "react";
import { Link } from "react-router-dom";

function SignIn() {

    return (
        <div>
            <div>
                <h2>Sign in to your account</h2>
                <p>Don't have an account yet? <Link to="/signup">Sign up</Link></p>
            </div>
            <form action="">
                <div>
                    <label htmlFor="">Email Address</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Enter Password</label>
                    <input type="password" />
                </div>
            </form>
            <button>Sign In</button>
        </div>
    );
};

export default SignIn;

