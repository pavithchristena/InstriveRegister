import React, { useState } from 'react';
import { TextField, Box, Button, Stack } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const TextFieldStyle = {
    width: "500px",
    // marginTop: "16px",
}

const backbtn = {
    borderColor: 'grey',
    color: 'grey',
    width: "40px",

}

const finishbtn = {
    width: "405px",
    height: "40px"
}

const AddProduct = () => {
    const location = useLocation()
    const { basicinfo, keyContact, image } = location.state;
    console.log(basicinfo, keyContact, image)
    const initialProductDetails = {
        productname: "",
        description: "",
        medialink: "",
    };

    const [productList, setProductList] = useState([initialProductDetails]);
    const [validationErrors, setValidationErrors] = useState({});

    console.log(productList)

    const addNewProduct = () => {
        setProductList([...productList, { ...initialProductDetails }]);
    };

    const handleProductChange = (index, field, value) => {
        const updatedProductList = productList.map((product, i) => {
            if (i === index) {
                return { ...product, [field]: value };
            }
            return product;
        });
        setProductList(updatedProductList);
    };

    const validateFields = () => {
        const errors = {};
        productList.forEach((product, index) => {
            if (!product.productname) {
                errors[`productname${index}`] = "Product Name is required";
            }
            if (!product.description) {
                errors[`description${index}`] = "Description is required";
            }
        });
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const navigateTo = useNavigate()
    const handleSubmit = async () => {
        const isValid = validateFields();
        if (isValid) {
            try {
                await axios.post('http://localhost:8080/api/register', {
                    basicinfo: basicinfo,
                    image,
                    key_contact_person: keyContact,
                    products: productList
                });
                console.log("Data posted successfully!");
                navigateTo('/')
            } catch (error) {
                console.error("Error posting data:", error);
                alert(error.response.data)
            }
        }
        else {
            alert("fill all the required feilds")
        }
    };


    const handleNavigate = () => {
        navigateTo('/register')
    }
    return (
        <div className='productpage'>

            {
                productList.map((product, index) => (
                    <div key={index} className='basicdetails'>
                        <label className='title'>Show your product Portfolio </label>
                        <label required>Product Name *</label>
                        <TextField
                            placeholder='Name'
                            type='text'
                            onChange={(e) => handleProductChange(index, 'productname', e.target.value)}
                            value={product.productname}
                            style={TextFieldStyle}
                            required

                            error={!!validationErrors[`productname${index}`]}

                            helperText={validationErrors[`productname${index}`]} />

                        <label required>Product Portfolio description *</label>
                        <TextField
                            placeholder='select Number,House Number'
                            onChange={(e) => handleProductChange(index, 'description', e.target.value)}
                            value={product.description}
                            style={TextFieldStyle} required />

                        <label >Facebook/LinkedIn page URL, Youtube link, etc</label>
                        <TextField
                            style={TextFieldStyle}
                            placeholder='http://'
                            onChange={(e) => handleProductChange(index, 'medialink', e.target.value)}
                            value={product.medialink}
                        />

                    </div>
                ))
            }
            <div>
                < Button variant="outlined" style={TextFieldStyle} sx={{ width: "500px", height: "50px", mt: 2 }} onClick={addNewProduct} >
                    + Add New Product
                </Button >
            </div>

            <div className='backfinishbtn'>
                <Button variant="outlined"
                    style={backbtn}
                    onClick={handleNavigate}
                >
                    Back
                </Button>
                <Button variant="contained"
                    style={finishbtn}
                    color="primary"
                    onClick={handleSubmit}                >
                    Finish
                </Button>
            </div>
        </div >
    )
}

export default AddProduct;
