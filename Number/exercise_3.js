// area of circle : S = PI.r.2
// S = PI(d/2)2
// C = PI.d = 2.PI.r
let areaOfCircle = 0;
function areaCircle (radius){
    areaOfCircle = Math.PI*radius*2;
    console.log(areaOfCircle.toFixed(2));
    //console.log(Math.round(areaOfCircle)); 
}

const radius  = 8;
areaCircle(radius);