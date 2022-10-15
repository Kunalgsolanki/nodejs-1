let a= 30 ;
let b = 0;



var takeTimedata = new Promise (
    (resolave , reject)=>{
  
        setTimeout(()=>{

            resolave(60);
        }, 2000)
    
    

    }
)

takeTimedata.then (
    (data)=>{
       b=data;
console.log(a+b);

    }
)


