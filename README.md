# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Necessary Dependencies

To ensure project is ran as intended, use these commands to install dependencies:

### `npm install @mui/material @emotion/react @emotion/styled`

### `npm install @date-io/date-fns`

### `npm install @mui/lab`

### `npm install date-fns`


## General

### App Usage

Once the app has been installed with the necessary dependencies, the user may use the npm start command
to run the app. Once loaded, the page will display the internal dashboard populated with fake, hardcoded data.
The user has the option to peruse the dashboard, schedule new repairs, or add new customers to the shop's customer list.

When scheduling a new repair, all form fields excluding the date picker accepts a string.
The repair time field should be typed in the format "hour:minutes p.m." with "a.m." as a valid substitute for "p.m."

When adding a new customer to the customer list, all form fields accepts a string

### Final Thoughts

First, I would like to thank SupplyHive for providing the opportunity to complete this challenge and display my technical abilities.
This project was my first experience using a react library for styling/page layout, rather than vanilla html/CSS. Much of the time spent on this application was learning and using Material UI, and just from that short experience I can see how it makes my code base more maintainable and reusable. Because of this, I directed most of my focus towards functionality rather than styling. If given more time, I would have improved styling of the components and added additional functionality that lets you mark a scheduled repair as completed, resulting in a repair list that can dynamically shrink and grow. 
