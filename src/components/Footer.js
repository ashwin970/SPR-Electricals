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
                        <Link to="/"><a><li>Home</li></a></Link>
                        <Link to="/products"><a><li>Products</li></a></Link>
                        <Link to="/enquiry"><a><li>Enquiry</li></a></Link>
                    </ul>

                </div>
                <div className="container-3">
                    <h4>Website By</h4>
                    <ul>
                    <Link to="http://www.linkedin.com/in/ashwin-kumar97"><li><i class='bx bxl-linkedin-square'></i>Ashwin</li></Link>
                    <Link to="http://www.linkedin.com/in/ganesh-sethu"><li><i class='bx bxl-linkedin-square' > Ganesh</i></li></Link>
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