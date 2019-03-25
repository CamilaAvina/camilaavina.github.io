/* comments out big chunks*/
let carX = 50;
let vroom;

function setup() { // setup only happens once//
  createCanvas(500, 500);
vroom = new p5.Oscillator('square');
  console.log("hi internet");
  vroom.start
}
//ctrl l high light; ctrl+shift d duplicates lines ctrl d to highlight same word

function draw() { //draw happens over and over and over//

  background(150, 50, 255, 80);

vroom.freq(carX);
  if (frameCount > 120) {
    //what moves the carX
    if (carX >= 500) {
      carX = -50
    } else if (carX >= 300) {
      carX += 6
    } else {
      carX += 3; // incromenter in the code //  console.log( carX);   //carX ++;   //  carX = carX + 3;
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

function mousePressed() {
vroom.stop();
}
