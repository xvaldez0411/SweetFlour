import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, BottomNavigation, CssBaseline, Container, Box} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/LandingPage.css'
import logo from '../images/sf_logo.PNG'
const LandingPage = () => {

  return (
    <>
    <CssBaseline/>
      <header>
        <div>
          <div className="logo">
            <Box
              component = "img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 350 },
                maxWidth: { xs: 350, md: 500 },
              }}
              alt="SweetFlour Logo"
              src={logo}
            />
          </div>
          <div className="link-bar">
          <a href='http://www.instagram.com/sweetflourcupcakerie'><InstagramIcon fontSize='medium'/></a>
          <Link to = {'/gallery'}>Gallery</Link> {/*add route on where to go */}
          <Link to = {'/contactus'}>Contact Us</Link> {/*add route on where to go */}
          </div>
        </div>
      </header>
      <main></main>
    </>
  )
}

export default LandingPage