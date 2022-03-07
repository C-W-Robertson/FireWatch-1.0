import React from "react";
import BasicMenu from "./BasicMenu";
import NotFound from './NotFound';
import { useParams } from "react-router-dom";


// Component 'BasicMenus' accepts the container from 'BasicMenu', as well as 'NotFound'
// It will also accept props, and use 'use parameters' component from React Router to place the 'slug' content into the menu.
// If the menu returns as 'undefined', the 'BasicMenu' component is called and sent on. If anything else is returned, the 'NotFound' component is called.

const BasicMenus = (props) => {
  let params = useParams();  

  const menu = props.menus.find(
    ({ slug }) => params.slug === slug
  );

  if (typeof(menu) !== 'undefined')
    return ( <BasicMenu menu={menu} /> );

  else 
    return ( <NotFound />);
};

export default BasicMenus;