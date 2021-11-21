import React, { Component } from "react";
import Logo from "../../images/panteon.png";

export class Header extends Component {
  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <img src={Logo} style={{ height: "100px" }} alt="logo"></img>
        </div>
      </>
    );
  }
}

export default Header;
