import React from "react";

// Component 'BasicMenu' is the container for the title and content for the overall content of the page.


const BasicMenu = ( {menu} ) => {

  return (
    <article className = "post container">
      
      <h2>{menu.title}</h2>
      
        <p>{menu.content}</p>
    
    </article>
  );
};

export default BasicMenu;
