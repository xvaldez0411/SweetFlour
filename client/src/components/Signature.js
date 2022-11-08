import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import axios from 'axios'
import {Box, CssBaseline, TextField, Stack, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import logo from '../images/sf_logo.PNG'
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link, useNavigate} from 'react-router-dom' 

const Signature = () => {

    const [name, setName] = useState("")
    const [contactInfo, setContactInfo] = useState("")
    const [date, setDate] = React.useState(dayjs('2014-08-18T21:11:54'))
    const [quantity, setQuantity] = useState("")
    const [sigCupcake, setSigCupcake] = useState("")
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const flavors = [
        'Classic',
        'Cookies & Cream',
        "Peanut Butter & Jelly",
        'Salted Caramel',
        'Ultimate Chocolate',
        "Strawberry Shortcake"
    ]

    const nameHandle = (e)=>{
        setErrors("")
        setName(e.target.value)
    }
    
    const contacHandle = (e)=>{
        setErrors("")
        setContactInfo(e.target.value)
    }
    const dateHandle = (e)=>{
        setErrors("")
        setDate(e.target.value)
    }
    const quantityHandle = (e)=>{
        setErrors("")
        setQuantity(e.target.value)
    }
    const flavorHandle = (e)=>{
        setErrors("")
        setSigCupcake(e.target.value)
    }

    const submitHandle = (e) => {
        e.preventDefault()

        const order = {
            name,
            contactInfo,
            date,
            quantity,
            sigCupcake
        }
        axios.post("http://localhost:8000/api/v1/signatures", order)
        .then((order)=>{
            console.log(order)
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
    }




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
        <main>
            <form>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                <TextField id="standard-basic" label="Name" value={name} variant="standard" />
                <TextField id="standard-basic" label="Contact Info" value={contactInfo} variant="standard" />
                {/* <TextField id="standard-basic" label="Standard" value={} variant="standard" /> */}
                </Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Date&Time picker"
                        value={date}
                        onChange={dateHandle}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">Choose Flavor</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={sigCupcake}
                        onChange={flavorHandle}
                        label="Quantity"
                    >
                    {
                        flavors.map((item, index)=>(
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))
                    }
                    </Select>
                </FormControl>
            </form>
        </main>
    </>
)
}

export default Signature