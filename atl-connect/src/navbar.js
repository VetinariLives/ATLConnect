import React from 'react';
import "./navbar.css";

function Navbar(){
    const menuClick = (id) =>{
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior : "smooth"});
        }
    }

    return(
        <nav>
            <ul><a href="#home">Home</a></ul>
            <ul><a href="#home">About</a></ul>
            <ul><a href="#home">Map</a></ul>
        </nav>
    );
}

export default Navbar;
