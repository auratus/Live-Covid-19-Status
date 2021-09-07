import React from "react";
import "./navigation.css";
import logo1 from "./logo1.png";

function Navigation(){
    return (
        <>
            <header>
                <nav id="navigation_child">
                    <div id="logo_div">
                        <img src={logo1} id="rt_logo" />
                    </div>

                    <div id="nav_main">

                        <input type="checkbox" id="checkBox" />
                        <label for="checkBox" id="checkLabel">&#x2630;</label>
                        <ul id="drop_down">
                            <label id="close" for="checkBox"><i class="fas fa-window-close"></i></label>
                            <li id="index"><a href="https://www.rohittechnical.cf" >Home</a></li>
                            <li id="services"><a href="https://www.rohittechnical.cf/services.html" >Services</a></li>
                            <li id="contactus"><a href="https://www.rohittechnical.cf/contactus.html" >Contact Us</a></li>
                            <li id="myprojects"><a href="https://www.rohittechnical.cf/myprojects.html" >Projects</a></li>
                        </ul>


                    </div>


                </nav>

            </header>
        </>
    );
}

export default Navigation;