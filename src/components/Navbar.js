/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from '../media/logo.png';

class Navbar extends React.Component{
    render(){
        return(
           <>
           <nav>
                <div className="nav-wrapper">
                <div className="NavChild1">   
                <a href="#!" class="brand-logo">
                    <img src={logo} className="logo"/>
                </a>
                </div>
                <div className="NavChild2">
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="#">Enquiry</a></li>
                    {/* <li><a href="mobile.html">Mobile</a></li> */}
                </ul>
                </div>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
           </>
        );
    }
}

export default Navbar;