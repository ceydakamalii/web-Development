// ReferenceError
// TypeError
// SyntaxError
// URIError

// Error

var user = {
    name: 'Sadık Turan'
}

try {//her daim çalışır hata var mı yok mu bilmezsek bu bloğa alırız
    // console.log(myFunction());
    console.log(user.name);
    if(!user.email){
        throw new Error('User has no email');
    }
}
catch(e){//hata varsa çalışır
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
}
finally{//her daim çalışır
    console.log('finally block');
}