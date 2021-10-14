import React, { useState } from 'react'
import {List, ListItem, ListItemText} from '@mui/material'


//Component that handles displaying inventory list
const Inventory = ({inventoryList}) => {
    return (
        <>
            <div className="inventory-title">
                <h2>Inventory List</h2>
            </div>
            <List>
                {
                    inventoryList.map((category) => {
                        return <ListItem>
                                    <ListItemText primary={`${category.type} : ${category.count}`} />
                            </ListItem>
                    })
                }
            </List>
        </>
    )
}
export default Inventory