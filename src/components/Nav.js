import React, {useState}from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

import profileImg from "../images/avatar.jpg";

function Nav(props) {
  const profile = useState({    profile: {
    user: "January O'Brien",
    avatar: profileImg,
  }})
  const UnorderedList = styled.ul`
    display:flex;
    justify-content:space-evenly;
    list-style:none;`
  const Avatar = styled.img`
    margin: 1%;
    width: 10%;
    height: 10%;
    border-radius: 50%;`
  const LinkStyle = styled.li`
  color:"#6B4E71";`  
  
  


  return (
    <nav >
      <UnorderedList>
        <LinkStyle>
          <Link to="/">Dashboard</Link>
        </LinkStyle>
        <LinkStyle>
          <Link to="/list">Todo List</Link>
        </LinkStyle>
      <Avatar alt="january" src={profileImg}/>
      </UnorderedList>
    </nav>
  );
}

export default Nav;


