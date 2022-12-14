import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, CssBaseline, Container, Box, Grid, Card, CardContent,CardActions, CardMedia, Button} from '@mui/material'
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
          <a href='http://www.instagram.com/sweetflourcupcakerie' className="link"><InstagramIcon fontSize='medium'/></a>
          <Link to = {'/gallery'} className="link">Gallery</Link> {/*add route on where to go */}
          <Link to = {'/contactus'} className="link">Contact Us</Link> {/*add route on where to go */}
          </div>
        </div>
      </header>
      <main>
          <Container maxWidth="md" className="signature-card">
            <Grid container>
              <Grid item md={6}>
                <Card sx={{ maxWidth: 350}}>
                  <CardMedia
                    component = "img"
                    sx={{
                      height: 233,
                      width: 350,
                      maxHeight: { xs: 233, md: 350 },
                      maxWidth: { xs: 350, md: 500 },
                    }}
                    image = "https://source.unsplash.com/random"
                    title = "image title"
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <Typography gutterBottom variant = "h7" paragraph>
                    hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to = {"/signature/order"}><Button size="small">Order Signature Cupcakes</Button></Link>
                </CardActions>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Grid container>
              <Grid item md={6}>
                <Card sx={{ maxWidth: 350}}>
                  <CardMedia
                    component = "img"
                    sx={{
                      height: 233,
                      width: 350,
                      maxHeight: { xs: 233, md: 350 },
                      maxWidth: { xs: 350, md: 500 },
                    }}
                    image = "https://source.unsplash.com/random"
                    title = "image title"
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <Typography gutterBottom variant = "h7" paragraph>
                    hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write hello, this is an example of what is going here after we decide what to write 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to = {"/custom/order"}><Button size="small">Order Custom-Themed Cupcakes</Button></Link>
                </CardActions>
              </Grid>
            </Grid>
          </Container>
      </main>
    </>
  )
}

export default LandingPage