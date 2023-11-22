function getTicket(age){
    let ticket=0;
    switch (age){
        case 10: 
            ticket = 150000;
            break;
        case 15: 
            ticket = 200000;
            break;
        case 20: 
            ticket = 250000;
            break;
        case 25: 
            ticket = 300000;
            break;
        default : 
            console.log("your age not valid");
        
    }
    return ticket;
}
const age = 15; 
console.log( "you are ",age,"years old and you have to pay ",getTicket(age));
