//Here our aim is to print 1,2,3,4(resolving in multiple steps)

const promise = 
    new Promise((resolve, reject) => {
    resolve("resolved");
    //reject("rejected");
})
.then(value => {
    console.log(value);
    return 1;
    // value =1 will go to next step 
})
.then(value => {
    console.log(value);
    return 2
    // value =2 will go to next step 

})
.then(value => {
    console.log(value);
    return 3
    // value =3 will go to next step 

})
.then(value => {
    console.log(value);
    return 4
    // value =4 will go to next step 

})
.then(value => {
    // atlast the value 4 is printed
    console.log(value);
    // to check the execution of flow we use~~~~~~ console.log("here")
    console.log("here")

})
.catch(err => {
    console.log(err);
})

//working~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`