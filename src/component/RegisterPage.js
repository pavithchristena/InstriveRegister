import React, { useState } from 'react'
import { MenuItem, TextField, Box, InputLabel, FormControl, Button, Avatar } from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import logo from '../asset/logo.PNG'


import "./Register.css"
import { useNavigate } from 'react-router-dom';


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
    width: "500px"
}
const avatarStyle = {
    width: "200px",
    height: "200px"
}

const Input = styled('input')({
    display: 'none',
});
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
    console.log(keyContact)
    const [image, setImage] = useState()
    const [validationErrors, setValidationErrors] = useState({});
    console.log(validationErrors)
    const handleChange = (event) => {
        setBasicinfo({
            ...basicinfo,
            country: event.target.value,
        })

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

    const handleImageUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage((event.target.files[0]));
        }
    };

    const validateFields = () => {
        const errors = {};
        if (!basicinfo.companyname) {
            errors.companyname = "required";
        }
        if (!basicinfo.headofficeadd) {
            errors.headofficeadd = "required";
        }
        if (!basicinfo.country) {
            errors.country = "required";
        }
        if (!basicinfo.postalcode) {
            errors.postalcode = "required";
        }
        if (!basicinfo.city) {
            errors.city = "required";
        }
        if (!basicinfo.countrycode) {
            errors.countrycode = "required";
        }

        if (!basicinfo.companyname) {
            errors.companyname = "required";
        }

        if (!keyContact.name) {
            errors.name = "required";
        }
        if (!keyContact.designation) {
            errors.designation = "required";
        }
        if (!keyContact.countrycode) {
            errors.countrycode = "required";
        }

        if (!keyContact.email) {
            errors.email = "required";
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const navigateTo = useNavigate()


    const submitHandler = async () => {
        const isValid = validateFields();
        console.log(isValid, "isvalid");

        if (isValid) {
            navigateTo("/addProduct", { state: { basicinfo, keyContact, image } })
        }
        else {
            alert("fill all the required feilds")
        }
    }

    return (
        <div className='mainContainer'>
            <div className='formsontainer'>
                <div className='basicdetails'>
                    <label className='title'>Basic Company Information</label>
                    <label required>Company Name *</label>
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
                    <label required>Head Office Address *</label>
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
                    <label required>Country *</label>
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
                                <MenuItem value={"India"}>India</MenuItem>
                                <MenuItem value={"US"}>US</MenuItem>
                                <MenuItem value={"UK"}>UK</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <div className='cityfeild'>
                        <div className='postal'>
                            <label required>Postal Code *</label>
                            <TextField style={CodeFieldStyle}
                                value={basicinfo.postalcode}
                                onChange={(e) => {
                                    const input = e.target.value;
                                    if (input === '' || /^\d{0,6}$/.test(input)) {
                                        setBasicinfo({
                                            ...basicinfo,
                                            postalcode: input,
                                        });
                                    }
                                }}

                                required />
                        </div>
                        <div className='postal'>
                            <label required>City *</label>
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
                            <label required>Country Code *</label>
                            <Box sx={{ minWidth: 10 }}>
                                <FormControl>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={basicinfo.countrycode}
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
                            <label required>contact Number *</label>

                            <TextField style={cityStyle}

                                onChange={(e) => {
                                    const input = e.target.value;

                                    if (input === '' || /^\d{0,10}$/.test(input)) {
                                        setBasicinfo({
                                            ...basicinfo,
                                            contactnumber: input,
                                        });
                                    }
                                }}
                                value={basicinfo.contactnumber}
                                required />
                        </div>
                    </div>
                    <label >Website URL </label>
                    <TextField style={TextFieldStyle}
                        onChange={(e) => {
                            setBasicinfo({
                                ...basicinfo,
                                weburl: e.target.value,
                            })

                        }}
                        value={basicinfo.weburl}
                    />
                </div>

                <div className='keycontainer'>
                    <label className='title'>Key Contact Person</label>
                    <label required>Name *</label>
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
                    <label required>Designation *</label>
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
                            <label required>Country Code *</label>
                            <Box sx={{ minWidth: 10 }}>
                                <FormControl>
                                    {/* <InputLabel >Code</InputLabel> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={keyContact.countrycode}
                                        placeholder='code'
                                        onChange={handlekeyCountrycode}
                                        style={dropdownStyle}
                                    >
                                        <MenuItem value={"+1"}>+1</MenuItem>
                                        <MenuItem value={"91"}>+91</MenuItem>
                                        <MenuItem value={"+88"}>+88</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className='postal'>
                            <label required>contact Number *</label>
                            <TextField style={cityStyle}
                                onChange={(e) => {
                                    const input = e.target.value;
                                    if (input === '' || /^\d{0,10}$/.test(input)) {
                                        setKeycontact({
                                            ...keyContact,
                                            contactnumber: input,
                                        });
                                    }
                                }}
                                value={keyContact.contactnumber}
                                required />
                        </div>

                    </div>
                    <label required>Email *</label>
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
                <Button variant="contained" style={btnStyle} onClick={submitHandler}>CONTINUE</Button>
            </div>

            <div className='filediv'>
                <Avatar
                    alt="Company Logo"
                    src={logo}
                    style={avatarStyle}
                    variant="rounded"
                />
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageUpload} />
                    <div>
                        <Button variant="outlined" component="span">
                            Upload Company Logo
                        </Button>
                    </div>
                </label>

            </div>
        </div >
    )
}

export default RegisterPage
