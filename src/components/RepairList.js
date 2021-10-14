import React, { useState } from 'react'
import ScheduledRepairCard from './ScheduledRepairCard'


//Component that displays the list of scheduled repairs
const RepairList = ({repairInfo}) => {
    return ( 
        <>
            <div className='repair-title'>
                <h2>Upcoming Repairs</h2>
            </div>
           {
                repairInfo.map((repair) => {
                    return <ScheduledRepairCard repair={repair}/>
                })
           } 
        </>
       
    )
}
export default RepairList