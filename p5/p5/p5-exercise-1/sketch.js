/* comments out big chunks*/ //console.log("hi internet");//
let carX = 50;
let vroom;
let carSpeed = 3;
let carAcc =0.5
let raceStarted

function setup() { // setup only happens once//
  createCanvas(500, 500);
  vroom = new p5.Oscillator('square');

}
//ctrl l high light; ctrl+shift d duplicates lines ctrl d to highlight same word

function draw() { //draw happens over and over and over//

  background(150, 50, 255, 80);
  // make start button
  rect(0, height - 50, 50, 50); // later we can make it say start

  vroom.freq(carX);


if (mouseIsPressed && mouseX >= 0 && mouseX <=50 && mouseY <= height  && mouse >= height-50) {
raceStarted =!raceStarted;
vroom.start();
vroom.amp(.05);
}
//  if (frameCount > 120) {
    //what moves the carX

  if (raceStarted == true){
    if (carX >= 500) {
      carX = -50
      carSpeed = 3;
    } else{
       carSpeed += carAcc;
       carX += carSpeed;  /*if (carX >= 300) {
      carX += 6
    } else {
      carX += 3; // incromenter in the code //  console.log( carX);   //carX ++;   //  carX = carX + 3;*/
    }
  }

  //car body
  noStroke();
  fill(255, 50, 50); //red
  triangle(carX, 50, carX + 60, 80, carX, 80);
  //  triangle(50,50,110,80,50,80);


  // car wheels
  fill(0, 0, 0); //black
  ellipse(carX, 80, 20, 20); //wheels
  //  ellipse(50, 80, 20, 20); //wheels
  ellipse(carX + 50, 80, 20, 20);


}
// mute it with mousePressed
function mousePressed() {
  vroom.stop();
}
