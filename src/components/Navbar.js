/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from '../media/logo.png';
import {Link} from 'react-router-dom';

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/enquiry">Enquiry</Link></li>
                    {/* <li><a href="mobile.html">Mobile</a></li> */}
                </ul>
                </div>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/enquiry"><li>Enquiry</li></Link>
                {/* <li><a href="mobile.html">Mobile</a></li> */}
            </ul>
           </>
        );
    }
}

export default Navbar;