import React from 'react';


const Header = (props) => (
  <div className="header">
    <div className="container">
    <h1 className="header__title">{props.title}</h1>
    {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
    
  </div>
);
  
  //we can use this default props to assign the title..we removed the above one
  Header.defaultProps = {
    title: "Indecision",
    
  };

  export default Header;