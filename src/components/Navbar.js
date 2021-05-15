import React from 'react';
import logo from '../media/logo.png';

class Navbar extends React.Component{
    render(){
        return(
            <>
        <nav>
          <div className="nav-wrapper indigo">
            <a href='#!' >
              <img
                src={logo}
                alt='Spr Logo'
                className='brand-logo'
              />
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="#">Sass</a></li>
              <li><a href="#">Components</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li><a href="#">Sass</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#">Javascript</a></li>
          <li><a href="#">Mobile</a></li>
        </ul>
      </>
        );
    }
}

export default Navbar;