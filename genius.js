  let newColor
  let lastColor
  let penultimateColor
  let sequence = []
  let colors = ["blue", "green", "red", "yellow"]
  let index = 0

  function addColor(){
   //Pick random color
   newColor = colors[Math.floor(Math.random() * 4)]
   //Avoid 3 equal colors in a row
   if (sequence.length >= 2){
      lastColor = sequence.length - 1
      penultimateColor = sequence.length - 2
      if (sequence[lastColor] == sequence[penultimateColor]){
         while(newColor == sequence[lastColor]){
            newColor = colors[Math.floor(Math.random() * 4)]   
         }
      }
   }
   turnOn(newColor)
   sequence.push(newColor)
   document.getElementById("sequence").innerText = sequence
}

function turnOn(colorToShine){ 
   document.getElementById(colorToShine).style.opacity = "100%"
   setTimeout(turnOff,500)
}

function turnOff(){
   document.getElementById("blue").style.opacity = "30%"
   document.getElementById("green").style.opacity = "30%"
   document.getElementById("red").style.opacity = "30%"
   document.getElementById("yellow").style.opacity = "30%"
}

function playSequence(){
   if (index < sequence.length - 1) { 
      turnOn(sequence[index])
      index++
   }
   else {
      turnOn(sequence[index])
      index=0
   }
}

//NEXT STEPS:
// 1 - function to check if clicked button matches with sequence current Element 
// 2 - function to repeat entire sequence each time{
   // turn on 1st element, wait for user click;
   // turn on 1st and 2nd element, check each click increasing sequencee index by 1
   // keep the process until user misses it
   // }
   