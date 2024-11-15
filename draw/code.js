let canvas_element= document.getElementById("c");
let painter = canvas_element.getContext('2d');

painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);

//let c = 0;
//while (c < 13){
//  painter.fillStyle = "#000000";
//  painter.fillRect(370 - c*30, 10+c*30,20,20);
//painter.fillStyle = "#00FF00";
//painter.fillRect(10+c*30,10+c*30,20,20,);
//++c;
//}
//let c;
//for (c = 0 ; c <13; ++c){
  //  if (370-c*30 > 200 && 10+c*30 <200){
    //    painter.fillStyle = "#00FF00"
      //  painter.fillRect(370-c*30, 10+c*30, 20,20)
  //  }
    //if(10+c*30 > 200){
      //  painter.fillStyle = "#00FF00"
        //painter.fillRect(10+c*30, 10+c*30, 20,20)
   // }
//if( 10+c*30 < 200){
    //painter.fillStyle = "#FF0000"
   // painter.fillRect(10+c*30, 10+c*30, 20, 20)
//}
//if( 370-c*30 <200 && 10+c*30 > 200){
   // painter.fillStyle = "#FF0000"
   // painter.fillRect(370-c*30, 10+c*30, 20, 20)
//}
  //  }

  painter.fillStyle = "#FF0000";
  let w = 20, h = 20, gap = 10;
for(let r = 0; r < 13; ++r){
  for(let c = r ; c < 13; ++c) {
    let x = gap + r*(w + gap);
    let y = gap + c*(h + gap);
    painter.fillRect(x,y,w,h);
  }
    
}



