import React from "react";
import Header from "../Header/Header";
import './HomePage.css';

function HomePage() {
    return(
        <body className="body-container">
        <Header/>
            <h1>Home Page</h1>
            <p>Welcome to our website</p>
        </body>
    );
}

export default HomePage;