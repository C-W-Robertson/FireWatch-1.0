// Component 'Navbar' creates the navigation bar.
// Props are passed into the component, which is then iterated around via map.
// This outputs the correct titles and slug, placing them into the array.

import React from 'react';
import { Link } from "react-router-dom";


const Navbar = props => {
  
  return (
    
    <div className = "NavBar">
      <nav className = "navbar navbar-expand-lg navbar-light bg-light">
        <div className = "container-fluid">
          
          <a className = "navbar-brand" href = "/">FireWatch</a>

          <button className = "navbar-toggler" type = "button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
          </button>

          <div className = "collapse navbar-collapse" id = "navbarNav">
            <ul className = "navbar-nav pt-3">
              {props.menus.map(post => (
              
              <li className = "nav-item" key = {post.id}>
                <Link className = "nav-link" to = {`/menu/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;