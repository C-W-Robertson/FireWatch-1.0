import React from "react";
import { Link } from "react-router-dom";

// Component 'NotFound' is for "Page not found" errors.
// It also provides a link to return home.

const NotFound = () => (

  <article className = "not-found container">
    
    <h1>404!</h1>
      <p>Sorry, there's nothing here.</p>
    
    <p>
      <Link to = "/">Return to Home</Link>
    </p>
  
  </article>
);

export default NotFound;
