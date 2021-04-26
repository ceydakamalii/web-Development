var products = [
    {id:1,name:'Samsung S8',price:3000},
    {id:2,name:'Samsung S7',price:2000},
    {id:3,name:'Samsung S6',price:1000}
]



function addProduct(prd,callback){

    return new Promise(function(resolve,reject){//resolve çözümleme doğruysa çalışır rejec yanlışsa çalışır
        setTimeout(()=>{
            products.push(prd);  
            let added = false;
            if(added){
                resolve();
            }else{
                reject('hata : 500');
            }
        });
    });
}

function getProducts(){
    setTimeout(() => {
        products.forEach(p=>{
            console.log(p.name);
        });
    }, (1000));
}


addProduct({id:4,name:"Samsung S5",price:500})
.then(getProducts)//ekleme olduktan sonra yani doğru eklendiyse resolve fonksiyon yani getProducts çalışır
.catch(function(err){//ekleme olmadıysa reject çalışır reject catch bloğunda olur.
    console.log(err);
});