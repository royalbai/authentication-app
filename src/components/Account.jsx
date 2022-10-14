import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Account() {

    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
            console.log("you are logged out");
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div>
            <h2>Account</h2>
            <p>User Email: {user && user.email}</p>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Account;