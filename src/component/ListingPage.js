import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import "./Register.css"
import { useNavigate } from 'react-router-dom';

const ClientsTable = () => {
    const [clients, setClients] = useState([]);
    console.log(clients)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/getdata');
                setClients(response.data.clients);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const navigateTo = useNavigate()

    const handleNavigate = () => {
        navigateTo('/register')
    }

    return (
        <div className='listingcontainer'>
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    Client Details
                    <div className='addbtn'>
                        <Button variant="contained" onClick={handleNavigate}>+Add</Button>
                    </div>
                </Typography>

                <TableContainer component={Paper}>
                    <Table aria-label="clients table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Company Name</TableCell>
                                <TableCell align="right">Head Office</TableCell>
                                <TableCell align="right">Country</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">Contact Number</TableCell>
                                <TableCell align="right">Website URL</TableCell>
                                <TableCell align="right">Name</TableCell>

                                <TableCell align="right">Product Name</TableCell>
                                <TableCell align="right">Product Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clients.map((client) => (
                                <TableRow key={client._id}>
                                    <TableCell component="th" scope="row">
                                        {client.basicinfo.companyname}
                                    </TableCell>
                                    <TableCell align="right">{client.basicinfo.headofficeadd}</TableCell>
                                    <TableCell align="right">{client.basicinfo.country}</TableCell>
                                    <TableCell align="right">{client.basicinfo.city}</TableCell>
                                    <TableCell align="right">{client.basicinfo.contactnumber}</TableCell>
                                    <TableCell align="right">{client.basicinfo.weburl}</TableCell>
                                    <TableCell align="right">
                                        {client.key_contact_person.map(person => person.name).join(', ')}
                                    </TableCell>
                                    <TableCell align="right">{client.products.map(product => product.productname).join(', ')}</TableCell>
                                    <TableCell align="right">{client.products.map(product => product.description).join(', ')}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default ClientsTable;
