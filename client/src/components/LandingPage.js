import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, BottomNavigation, CssBaseline, Container} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/LandingPage.css'
const LandingPage = () => {

  return (
    <>
    <CssBaseline/>
      <header>
        <div>
          <Typography variant="h2" align="center">
              SWEET FLOUR
          </Typography>
          <div className="link-bar">
          <a href='http://www.instagram.com/sweetflourcupcakerie'><InstagramIcon fontSize='medium'/></a>
          <Link to = {'/gallery'}>Gallery</Link> {/*add route on where to go */}
          <Link to = {'/contactus'}>Contact Us</Link> {/*add route on where to go */}
          </div>
        </div>
      </header>
    </>
  )
}

export default LandingPage