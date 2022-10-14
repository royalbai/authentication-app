import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <div>
            <div>
                <h2>Sign up for account</h2>
                <p>Already have an account? <Link to="/">Sign in</Link></p>
            </div>
            <form action="">
                <div>
                    <label htmlFor="">Email Address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" />
                </div>
                <div>
                    <label htmlFor="">Enter Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
            </form>
            <button>Sign In</button>
        </div>
    );
};

export default SignUp;