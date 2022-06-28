const promise1=new Promise((resolve,reject)=>{
    //resolve('Veriler alındı');
    reject('Bağlantı hatası');
});


promise1.then(value=>{
    console.log(value);
}).catch(value=>{
    console.log(value);
});

