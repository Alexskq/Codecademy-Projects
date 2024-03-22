import React from "react";

function Header(props) {
  returnr(
    <>
      <img src={props.profilImge} />
      <h1>{props.username}</h1>
    </>
  );
}

export default Header;
