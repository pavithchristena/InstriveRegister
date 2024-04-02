import React, { useState } from 'react'
import { MenuItem, TextField, Box, InputLabel, FormControl, Button, } from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';

import "./Register.css"


const TextFieldStyle = {
    width: "500px",
}

const CodeFieldStyle = {
    width: "100px"
}

const cityStyle = {
    width: "395px"
}
const dropdownStyle = {
    width: "100px",
}

const btnStyle = {
    width: "40%"
}
const RegisterPage = () => {

    const basicdetails = {
        companyname: "",
        headofficeadd: "",
        country: "",
        postalcode: "",
        city: "",
        countrycode: "",
        contectnumber: "",
        weburl: ""
    }
    const [basicinfo, setBasicinfo] = useState({ ...basicdetails })
    console.log(basicinfo)
    const keydetails = {
        name: "",
        designation: "",
        countrycode: "",
        contactnumber: "",
        email: "",
    }
    const [keyContact, setKeycontact] = useState({ ...keydetails })
    const [image, setImage] = useState()
    console.log(keyContact)
    const handleChange = (event) => {
        setBasicinfo({
            ...basicinfo,
            country: event.target.value,
        })
        // basicinfo.country(event.target.value);
    };

    const handleCountrycode = (event) => {
        setBasicinfo({
            ...basicinfo,
            countrycode: event.target.value,
        })
    }
    const handlekeyCountrycode = (event) => {
        setKeycontact({
            ...keyContact,
            countrycode: event.target.value,
        })
    }
    const handleCode = (event) => {
        setKeycontact({
            ...keyContact,
            countrycode: event.target.value,
        })
    }
    const handleBasicInfoChange = (event) => {
        const { name, value } = event.target;
        setBasicinfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleKeyContactChange = (event) => {
        const { name, value } = event.target;
        setKeycontact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDropdownChange = (event, setState) => {
        setState(event.target.value);
    };



    return (
        <div className='mainContainer'>
            <div className='formsontainer'>
                <div className='basicdetails'>
                    <label className='title'>Basic Company Information</label>
                    <label required>Company Name</label>
                    <TextField
                        placeholder='Name'
                        type='text'
                        onChange={(e) => {
                            setBasicinfo({
                                ...basicinfo,
                                companyname: e.target.value,
                            })
                        }}
                        value={basicinfo.companyname}
                        style={TextFieldStyle}
                        required />
                    <label required>Head Office Address</label>
                    <TextField
                        placeholder='select Number,House Number'
                        onChange={(e) => {
                            setBasicinfo({
                                ...basicinfo,
                                headofficeadd: e.target.value,
                            })
                        }}
                        value={basicinfo.headofficeadd}
                        style={TextFieldStyle} required />
                    <label required>Country</label>
                    {/* <TextField style={TextFieldStyle} required /> */}
                    <Box sx={{ minWidth: 10 }}>
                        <FormControl>
                            {/* <InputLabel > Select Country</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={basicinfo.country}
                                placeholder='code'
                                onChange={handleChange}
                                style={TextFieldStyle}
                            >
                                <MenuItem value={10}>India</MenuItem>
                                <MenuItem value={20}>US</MenuItem>
                                <MenuItem value={30}>UK</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <div className='cityfeild'>
                        <div className='postal'>
                            <label required>Postal Code</label>
                            <TextField style={CodeFieldStyle}
                                value={basicinfo.postalcode}
                                onChange={(e) => {
                                    setBasicinfo({
                                        ...basicinfo,
                                        postalcode: e.target.value,
                                    })
                                }}

                                required />
                        </div>
                        <div className='postal'>
                            <label required>City</label>
                            <TextField style={cityStyle}
                                value={basicinfo.city}
                                onChange={(e) => {
                                    setBasicinfo({
                                        ...basicinfo,
                                        city: e.target.value,
                                    })
                                }}

                                required />
                        </div>
                    </div>
                    <div className='cityfeild'>

                        <div >
                            <label required>Country Code</label>
                            <Box sx={{ minWidth: 10 }}>
                                <FormControl>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        placeholder='code'
                                        onChange={handleCountrycode}
                                        style={dropdownStyle}
                                    >
                                        <MenuItem value={10}>+1</MenuItem>
                                        <MenuItem value={20}>+91</MenuItem>
                                        <MenuItem value={30}>+88</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className='postal'>
                            <label required>contact Number</label>
                            <TextField style={cityStyle}
                                onChange={(e) => {
                                    setBasicinfo({
                                        ...basicinfo,
                                        contectnumber: e.target.value,
                                    })

                                }}
                                value={basicinfo.contectnumber}
                                required />
                        </div>
                    </div>
                    <label required>Website URL</label>
                    <TextField style={TextFieldStyle}
                        onChange={(e) => {
                            setBasicinfo({
                                ...basicinfo,
                                weburl: e.target.value,
                            })

                        }}
                        value={basicinfo.weburl}
                        required />
                </div>

                <div className='keycontainer'>
                    <label className='title'>Key Contact Person</label>
                    <label required>Name</label>
                    <TextField
                        style={TextFieldStyle}
                        placeholder='Name'
                        onChange={(e) => {
                            setKeycontact({
                                ...keyContact,
                                name: e.target.value,
                            })

                        }}
                        value={keyContact.name}
                        required />
                    <label required>Designation</label>
                    <TextField
                        style={TextFieldStyle}
                        placeholder="Designation"
                        onChange={(e) => {
                            setKeycontact({
                                ...keyContact,
                                designation: e.target.value,
                            })

                        }}
                        value={keyContact.designation}
                        required />
                    <div className='cityfeild'>

                        <div >
                            <label required>Country Code</label>
                            <Box sx={{ minWidth: 10 }}>
                                <FormControl>
                                    <InputLabel >Code</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        placeholder='code'
                                        onChange={handlekeyCountrycode}
                                        style={dropdownStyle}
                                    >
                                        <MenuItem value={10}>+1</MenuItem>
                                        <MenuItem value={20}>+91</MenuItem>
                                        <MenuItem value={30}>+88</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className='postal'>
                            <label required>contact Number</label>
                            <TextField style={cityStyle}
                                onChange={(e) => {
                                    setKeycontact({
                                        ...keyContact,
                                        contactnumber: e.target.value,
                                    })

                                }}
                                value={keyContact.contactnumber}
                                required />
                        </div>

                    </div>
                    <label required>Email</label>
                    <TextField style={TextFieldStyle}
                        onChange={(e) => {
                            setKeycontact({
                                ...keyContact,
                                email: e.target.value,
                            })

                        }}
                        value={keyContact.email}
                        required />
                </div>
                <br />
                <Button variant="contained" style={btnStyle}>CONTINUE</Button>
            </div>

            <div className='filediv'>

                <input type="file" multiple accept="image/*"
                // onChange={onImageChange}
                />
            </div>
        </div >
    )
}

export default RegisterPage
