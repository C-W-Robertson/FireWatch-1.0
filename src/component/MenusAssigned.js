import React from "react";
import MainContent from './MainContent';

// Component 'MenusAssigned' creates the various navigation items.
// They are then linked to thee proper content.


const MenusAssigned = ({ pages }) => {
  return (
    
    <MainContent pages = {pages} />
  );
};

export default MenusAssigned;