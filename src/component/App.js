import React, {Component} from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../style/style.css';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
      return(
        <Router>
        <div className="header">
          <div className="container warna">
            <nav className= "navbar navbar-expand-lg navbar-light warna">
              <Link className="navbar-brand" href="#"><img className="logo" src={require('../gambar/bitmap.png')}/></Link>
              <button className="navbar-toggler" type="button" data-toggle="#navbarSupportedContent" aria-controls="navbarSuportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

                  <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          PROMO
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="dropdown-item" href="#">PROMO</Link>
                          <Link class="dropdown-item" href="#">Partnership</Link>
                        </div>
                      </li>
                      <li className="nav-item-dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        PAKET & ADO-ON
                        </Link>
                        <div className="dropdown-menu" arial-labelledby="navbarDropdown">
                        <Link className="dropdown-item" href="#">PROMO</Link>
                        <Link className="dropdown-item" href="#">Partnership</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Something else here</Link>
                        </div>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link">PUSAT BANTUAN</Link>
                      </li>
                    </ul>
                  </div>
            </nav>
          </div>
        <div className="container">
        <Home/>
        </div>
      </div>
      </Router>
      )
    }
}

export default App;
