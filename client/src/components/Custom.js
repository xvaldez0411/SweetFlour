import React, {useState, useEffect} from 'react'
import {Box, CssBaseline} from '@mui/material'
import logo from '../images/sf_logo.PNG'
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from 'react-router-dom' 

const Signature = () => {


return (
    <>
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
            <a href='http://www.instagram.com/sweetflourcupcakerie' className="link"><InstagramIcon fontSize='medium'/></a>
            <Link to = {"/"} className="link">Home</Link>
            <Link to = {'/gallery'} className="link">Gallery</Link> 
            <Link to = {'/contactus'} className="link">Contact Us</Link> 
            </div>
        </div>
    </header>
    </>
)
}

export default Signature