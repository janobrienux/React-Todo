import React from 'react';
import {Link} from "react-router-dom";
// import profileImg from '../images/avatar.jpg'

function Nav(state, profile,profileImg) {
  state = {
    profile: {
      user: "January O'Brien",
    },
  }
  
  return (
    
    <nav>
      <ul>
  <Link>{}</Link>
      </ul>

    <img style={styles.avatar} alt="january" src="./images/avatar.jpg"></img>
    </nav>
    
  )
}


export default Nav

const styles = {
  avatar: {
    display:"flex",
    margin:"4% 4% ",
    width:"10%",
    height:"10%",
    borderRadius:"50%",
    
  }
}
