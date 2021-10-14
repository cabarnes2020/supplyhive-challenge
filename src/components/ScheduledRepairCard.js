import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'

//Component that displays all info pertaining to a scheduled repair
const ScheduledRepairCard = ({repair}) => {
    return (
        <div className='repair-card'>
            <Card sx={{border: 1,
                        margin: 2,
                        color:'red'}}>
                <CardHeader 
                    title={`${repair.customer}'s Repair`}
                    subheader={`Technician: ${repair.technician}`}
                />
                <CardContent>
                    <Typography align='center' paragraph={true}>
                        {`There is a repair scheduled for ${repair.customer} on ${repair.date} at ${repair.time}The repair will be
                        handled by ${repair.technician}`}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default ScheduledRepairCard
