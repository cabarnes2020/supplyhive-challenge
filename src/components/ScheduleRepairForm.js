import React, { useState } from 'react'
import {TextField, Button} from '@mui/material'
import DateAdapter from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


//Component that displays form, as well as handle functionality for updating repair list once 
//a new repair has been scheduled
const ScheduleRepairForm = ({setRepairInfo}) => {
    //initialize form values besides date
    const defaultValues = {
        customer: "",
        time: "",
        technician: "",
      };
    
    const [formValues, setFormValues] = useState(defaultValues)
    const [date, setDate] = useState(null)
    const [open, setOpen] = useState(false)
    
    const updateDate =(e) => {
        setDate(e)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        setRepairInfo((repairInfo) => {
            return [...repairInfo, {...formValues, date: date.toDateString()},]
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
                    name="customer"
                    value={formValues.customer}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id='repair-time'
                    label="Repair Time"
                    variant="outlined"
                    name="time"
                    value={formValues.time}
                    onChange={handleChange}
                />
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                        id='repair-date'
                        label="Schedule a Date"
                        name="date"
                        value={date}
                        onChange={updateDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <TextField
                    required
                    id="technician-name"
                    label="Technician"
                    variant="outlined"
                    name="technician"
                    value={formValues.technician}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit" onClick={handleClose}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default ScheduleRepairForm