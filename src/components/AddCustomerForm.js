import React, { useState } from 'react'
import {TextField, Button} from '@mui/material'


//Component that displays customer form, as well as handle functionality for updating customer list once 
//a new customer profile has been created
const AddCustomerForm = ({setCustomers}) => {
    //initialize form values besides date
    const defaultValues = {
        name: "",
        phoneNum: "",
        email: "",
        favBike: ""
      };
    
    const [formValues, setFormValues] = useState(defaultValues)
    const [open, setOpen] = useState(false)
  
    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e) => {
        // debugger
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        setCustomers((customers) => {
            return [...customers, {...formValues}]
        })
    }

    return(
        <div>
            <form onSubmit={onSubmit} id="form">
                <TextField
                    required
                    id='customer-name'
                    label="Customer Name"
                    variant="outlined"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id='customer-number'
                    label="Customer's Number"
                    variant="outlined"
                    name="phoneNum"
                    value={formValues.phoneNum}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="customer-email"
                    label="Customer's Email"
                    variant="outlined"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="customer-fav-bike"
                    label="Favorite Bike"
                    variant="outlined"
                    name="favBike"
                    value={formValues.favBike}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit" onClick={handleClose}>
                    Submit
                </Button>
            </form>
        </div>
    )
}
export default AddCustomerForm