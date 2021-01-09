//Required Modules
var express = require("express")

//Creating Instance
var app = express()

//Function for delay
function resolveAfter5Seconds() {
    return new Promise(resolve => {
      //5000 ms delay
      setTimeout(() => {
        resolve('value after the first completed');
      }, 5000);
    });
  }

//Asynchronous function inside Route --> Here Async function happens like: first one function happens and waits (say 5 seconds) for next step to happen
app.get("/abi",async function (req,res) {
    var name = req.query.name
    console.log('First :'+name+"  waiting");
    //await is used for waiting till the previous process complition
    const result = await resolveAfter5Seconds();
    res.send("hi "+name +" , This is displayed 5 seconds later")
    
  })

//App for standalone action  

app.listen(3000 , function(){
    console.log("running on port 3000 .......")
})


//Working---------------------------------------------------------------------------