import React, { useState } from 'react'
import { MenuItem, TextField, Box, InputLabel, FormControl, Button, } from "@mui/material"
import "./Register.css"


const TextFieldStyle = {
    width: "500px",
}

const AddProduct = () => {
    const productdetails = {
        productname: "",
        description: "",
        medialinkL: "",
    }
    const [productinfo, setProductInfo] = useState({ ...productdetails })
    console.log(productinfo)


    return (
        <div >
            <div className='basicdetails'>
                <label className='title'>Show your product Portfolie</label>
                <label required>Product Name</label>
                <TextField
                    placeholder='Name'
                    type='text'
                    onChange={(e) => {
                        setProductInfo({
                            ...productinfo,
                            productname: e.target.value,
                        })
                    }}
                    value={productinfo.productname}
                    style={TextFieldStyle}
                    required />
                <label required>Product Portfolie description</label>
                <TextField
                    placeholder='select Number,House Number'
                    onChange={(e) => {
                        setProductInfo({
                            ...productinfo,
                            description: e.target.value,
                        })
                    }}
                    value={productinfo.description}
                    style={TextFieldStyle} required />
                <div className='postal'>
                    <label required>Facebook/LinkedIn page URL,Youtube link,etc</label>
                    <TextField style={TextFieldStyle}
                        placeholder='http://'
                        onChange={(e) => {
                            setProductInfo({
                                ...productinfo,
                                medialinkL: e.target.value,
                            })
                        }}
                        value={productinfo.medialinkL}
                        required />
                </div>
            </div>

        </div>

    )
}

export default AddProduct
