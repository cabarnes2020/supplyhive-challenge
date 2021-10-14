import React, { useState } from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material'

//Component that handles functionality for a pop-up dialog
const RepairDialog = ({children}) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Button variant="contained" onClick={handleClick}>
                Schedule a Repair
            </Button>
            <Dialog open={open}>
                <DialogTitle>Schedule Repair</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default RepairDialog