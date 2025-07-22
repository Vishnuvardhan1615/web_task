import React from "react";
import { Link } from "react-router-dom";

function entry_page()
{
    return(
        <div>
            <h1>Entry Page</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}