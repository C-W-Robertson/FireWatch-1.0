import React from "react";

// Component 'Page' returns a basic content section of the page.
// This includes the title and the page content.


const Page = ( {page} ) => {
  return (

    <article className = "page container">
      
      <h1>{page.title}</h1>
      
      <p>{page.content}</p>
    
    </article>
  );
};

export default Page;
