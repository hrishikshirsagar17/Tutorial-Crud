import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
    return(
      <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <a href="/tutorials" className='navbar-brand'>
            Tutorial App
          </a>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/tutorials"} className="nav-link">
                  Tutorials
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
      </div>
    )
  }
    
}

export default App;
