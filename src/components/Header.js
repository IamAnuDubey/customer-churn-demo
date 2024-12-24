import React from "react";
 
const Header = () => {
    return (
       <header class="bg-dark text-white py-3" >
        <div class="container text-center">
            <h1>Customer Churn Prediction</h1>
            <nav class="mt-3">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#about">About the Project</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#demo">Project Output</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#download">Download Code</a>
                    </li>
                </ul>
            </nav>
        </div>
       </header>
    );
};

export default Header;