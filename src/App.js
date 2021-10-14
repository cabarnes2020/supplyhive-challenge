import React, { useState } from 'react'
import Inventory from './components/Inventory'
import RepairList from './components/RepairList'
import ScheduleRepairForm from './components/ScheduleRepairForm'
import RepairDialog from './components/RepairDialog'
import Customers from './components/Customers'
import CustomerDialog from './components/CustomerDialog'
import AddCustomerForm from './components/AddCustomerForm.js'
import './App.css';


function App() {
  //create all data structures needed to give components functionality
  const repairList = [
    {
      customer: "Sarah",
      time: "12:00 p.m.",
      date: new Date().toDateString(),
      technician: "Mike"
    },
    {
      customer: "L",
      time: "2:00 p.m.",
      date: new Date().toDateString(),
      technician: "Mike"
    },
    {
      customer: "CB",
      time: "4:00 p.m.",
      date: new Date().toDateString(),
      technician: "Heather"
    }
  ]
  const [repairInfo, setRepairInfo] = useState(repairList)

  const inventoryList = [
    {
      type: "Road Bikes",
      count: 16
    },
    {
      type: "Mountain Bikes",
      count: 30
    },
    {
      type: "Touring Bikes",
      count: 8
    },
    {
      type: "BMX Bikes",
      count: 17
    },
  ]

  const customerList = [
    {
      name: "CB",
      phoneNum: "7739202001",
      email: "cb@bike.com",
      favBike: "Road Bikes"
    },
    {
      name: "Jim",
      phoneNum: "7082145621",
      email: "jim@bike.com",
      favBike: "BMX Bikes"
    },
    {
      name: "Emily",
      phoneNum: "3120009202",
      email: "emily@bike.com",
      favBike: "BMX Bikes"
    },
    {
      name: "Tasha",
      phoneNum: "7731110202",
      email: "tasha@bike.com",
      favBike: "Mountain Bikes"
    },
    {
      name: "Jeremy",
      phoneNum: "6309876543",
      email: "jeremy@bike.com",
      favBike: "Road Bikes"
    },
  ]
  const [customers, setCustomers] = useState(customerList)

  
  return (
    <div className="App">
        <div className='page-title'>
          <h1>CB's Bike Emporium</h1>
        </div>
        <RepairList repairInfo={repairInfo} />
        <RepairDialog>
          <ScheduleRepairForm setRepairInfo={setRepairInfo}/>
        </RepairDialog>
        <Inventory inventoryList={inventoryList}/>
        <Customers customers={customers} />
        <CustomerDialog>
          <AddCustomerForm setCustomers={setCustomers}/>
        </CustomerDialog>
    </div>
  );
}

export default App;
