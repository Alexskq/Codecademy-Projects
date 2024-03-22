import React from "react";

function Header(props) {
  return (
    <>
      <img src={props.profilImg} />
      <h1>{props.username}</h1>
    </>
  );
}

export default Header;
