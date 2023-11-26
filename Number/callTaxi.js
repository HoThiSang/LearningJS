function getTaxiCount (passengerCount){
    if(passengerCount<=0) return -1;
    let res = parseInt(passengerCount/7);
    // console.log(res);
    res+= passengerCount % 7==0? 0 : 1;
    
    return res;

}



const a =20;
console.log("The taxi number to call is : "+getTaxiCount(a));
