import React from 'react'
import CustomerCard from './CustomerCard'

//Component that handles display of customers
const Customers = ({customers}) => {
    return ( 
        <>
            <div className='customer-title'>
                <h2>Our Customers</h2>
            </div>
           {
            customers.map((customer) => {
                return <CustomerCard customer={customer}/>
            })
           } 
        </>
    )
}
export default Customers