import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className="navbar-info bg-info navbar navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand text-white" href="#">Simple markdown</a>
      </div>
    </div>
  </div>
    )
  }


}

export default Header;
