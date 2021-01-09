//Promise syntax- Resolve,Reject usage

const promise = new Promise((resolve, reject) => {
    // to resolve i.e) to run the code (if you want to continue the execution)
    resolve("resolved");

    // to reject i.e) to stop the code at this point (if you want to end the execution)
    reject("rejected");
})
.then(values =>{
    console.log(values);
})
.catch(err =>{
    console.log(err);
})
