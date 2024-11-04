document.getElementById("btn").addEventListener("click",onclick);

function onclick() {

    let score = document.getElementById("score").valueAsNumber;

    let letter = " ";
    if(score >= 97){
        letter = "A+";
    }else if (score >=96){
        letter = "A";
    }else if (score >= 92){
        letter = "A-";
    }else if(score >= 89){
        letter = "B+";
    }else if (score >= 86){
        letter = "B";
    }else if(score >= 82){
        letter = "B-";
    }else if (score >= 79){
        letter = "C+";
    }else if (score >= 76){
        letter = "C";
    }else if (score >= 72){
        letter = "C-";
    }else if( score >= 69){
        letter = "D+";
    }else if ( score >= 66){
        letter = "D";
    }else if ( score >= 62){
        letter = "D-";
    }else {
        letter = "F";
    }
document.getElementById("grade").innerHTML =  "Your grade is " + letter +"."

}
