// var p=new Promise(function(resolve,reject){
//     if(true){
//         resolve('success');
//     }
//     else{
//         reject('failure');
//     }
// });
// p.then(function(data){
//     console.log(data);

// }).catch(function(data){
//     console.log(data);
// })



// new Promise(function(resolve,reject){
//     if(true){
//         resolve(5);
//     }
// }).then(function(data){
//     console.log(data);
//     return data*data;
// }).then(function(data){
//     console.log(data);
//     return data*data;
// }).then(function(data){
//     console.log(data);
// });


const isMomHappy=true;
const WillGetPhone=new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone={
            name: 'iPhone 8',
            price: 8000,
            color: 'blue'
        };
        resolve(phone);
    }
    else{
        const error=new Error('mom is not Happy');
        reject(error);
    }
});
const showToFriends=function(phone){
    const message="Hey friends,this is my phone "+phone.name;
    return Promise.resolve(message);

}
const askMom=function(){
    WillGetPhone
        .then(showToFriends).then(message=>console.log(message))
        .catch(error=>{
            console.log(error);
        })
}
askMom();
