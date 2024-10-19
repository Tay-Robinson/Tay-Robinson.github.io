document.getElementById('btn').addEventListener("click", onclick);

function onclick () {
    let p = document.getElementById("loan").valueAsNumber;
    let n = document.getElementById("year").valueAsNumber * 12;
    let r = document.getElementById("rate").valueAsNumber / 100 / 12;
    let A = p * r*(1+r)**n / ((1+r)**n - 1);
    let total_pay = A * n;
    let total_interest = total_pay - p;
    document.getElementById("result").innerHTML = "The monthly payment is $ " + 
    A.toFixed(2) + ".<br> The total payment is $" + total_pay.toFixed(2) +
    ".<br>The total interest is $" + total_interest.toFixed(2) + ".";
}


