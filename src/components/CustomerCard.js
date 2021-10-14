import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'


//Component that displays a single customer's info
const CustomerCard = ({customer}) => {
    return (
        <div className='customer-card'>
            <Card sx={{border: 1,
                        margin: 2,
                        color: 'red'}}>
                <CardHeader 
                    title={customer.name}
                    subheader={`Number: ${customer.phoneNum}`}
                />
                <CardContent>
                    <Typography align='left' paragraph='true'>
                        {`Email: ${customer.email}`}
                    </Typography>
                    <Typography align='left' paragraph='true'>
                        {`Favorite bikes: ${customer.favBike}`}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default CustomerCard
