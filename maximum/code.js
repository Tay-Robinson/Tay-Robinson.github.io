document.getElementById('btn').addEventListener("click",onclick);

function onclick() {
//get the value from the input box
   let a = document.getElementById("first").valueAsNumber;
   let b = document.getElementById("second").valueAsNumber;
   let c= document.getElementById("third").valueAsNumber;
//compre to get the largets number
let max;
if(a > b && a > c)
    max = a;
if(b > a && b > c)
    max = b;
if(c > a && c > b)
max = c;
//display the largest number
document.getElementById("result").innerHTML = "The maximum is " + max +"."

}