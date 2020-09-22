import React from 'react'

function Nav(state, profile,profileImg) {
  state = {
    profile: {
      user: "January O'Brien",
      profileImg: profileImg,
    },
  }
  return (
    
    <nav>

    <img alt="january" src={profile.profileImg}></img>
    </nav>
    
  )
}


export default Nav
