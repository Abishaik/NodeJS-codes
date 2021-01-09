//Required Modules
const express = require('express')

//creating an instance
const app = express()

//Function inside Route
app.get('/', (req, res) => {
  // to display in webpage  
  res.send('Hello World!')
})

//setting server for production
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})

//working------------------------------------------------------