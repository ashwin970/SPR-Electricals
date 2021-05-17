/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Link} from 'react-router-dom';

const Footer =()=>{
    return(

        <footer>
            <div className="container-footer">
                <div className="container-1">
                    <h4>
                        Contact Us
                    </h4>
                    <p>
                        SPR Electricals<br/>
                        110,opp Bharathi cement,<br/>
                        Sathyamoorthy Road,<br/>
                        Ram Nagar,<br/>
                        Coimbatore - 641049.<br/>
                    </p>
                </div>
                <div className="container-2">
                    <h4>
                        Explore
                    </h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/enquiry">Enquiry</Link></li>
                    </ul>

                </div>
                <div className="container-3">
                    <h4>Website By</h4>
                    <ul>
                    <li><a href="http://www.linkedin.com/in/ashwin-kumar97"><i class='bx bxl-linkedin-square'>Ashwin</i></a></li>
                    <li><a href="http://www.linkedin.com/in/ganesh-sethu"><i class='bx bxl-linkedin-square'> Ganesh</i></a></li>
                    </ul>
                </div>
               
            </div>
            <div className="copy">
                <span class="text-muted">
                    &copy; 2021
                </span>
                </div>
        </footer>

    );
}
export default Footer;