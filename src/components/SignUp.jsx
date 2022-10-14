import React from "react";
import { Link } from "react-router-dom";


function SignUp() {

    return (
        <div>
            <div>
                <h2>Sign up for account</h2>
                <p>Already have an account? <Link to="/">Sign in</Link></p>
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

export default SignUp;