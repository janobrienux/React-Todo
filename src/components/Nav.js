import React, {useState}from "react";
import { Link } from "react-router-dom";

import profileImg from "../images/avatar.jpg";

function Nav(props) {
  const profile = useState({    profile: {
    user: "January O'Brien",
    avatar: profileImg,
  }})
  

  return (
    <nav >
      <ul style={styles.container}>
        <li>
          <Link style={styles.link} to="/">Dashboard</Link>
        </li>
        <li>
          <Link style={styles.link}to="/list">Todo List</Link>
        </li>
      <img style={styles.avatar} alt="january" src={profileImg}></img>
      </ul>
    </nav>
  );
}

export default Nav;

const styles = {
  container: {
    display:"flex",
    justifyContent:"space-evenly",
    listStyle:"none",
  
  },
  link: {
    color:"#6B4E71",
  },
  avatar: {
    margin: "1%",
    width: "10%",
    height: "10%",
    borderRadius: "50%",
  },
};
