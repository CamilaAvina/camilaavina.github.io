// The midi notes of a scale
let notes = [ 60, 62, 64, 65, 67, 69, 71];

// For automatically playing the song
let index = 0;
let song = [
   {note: 4, duration: 400, display: "D" },
   {note: 6, duration: 200, display: "G" },
   {note: 1, duration: 200, display: "A" },
   {note: 2, duration: 200, display: "B" },
   {note: 3, duration: 200, display: "C" },
   {note: 4, duration: 400, display: "D" },
   {note: 0, duration: 400, display: "G" },
   {note: 5, duration: 400, display: "G" },
   {note: 6, duration: 400, display: "G" }
];
let trigger = 0;
let autoplay = false;
let osc = new p5.TriOsc();;

let mySound1
let mySound2
let mySound3
let mySound4
let mySound5
let mySound6
let mySound7


function preload(){

  mySound1 = loadSound ('sound/elephant.mp3'),
  mySound2 = loadSound ('sound/alarm.mp3'),
  mySound3 = loadSound ('sound/bubbles.mp3'),
  mySound4 = loadSound ('sound/cinematic.mp3'),
  mySound5 = loadSound ('sound/explosion.mp3'),
  mySound6 = loadSound ('sound/race_car.mp3'),
  mySound7 = loadSound ('sound/toilet.mp3');
}

function setup() {
  createCanvas(1000, 650);

  let div = createDiv("Click to play notes or ");
  div.id("instructions");
  let button = createButton("play song.");
  button.parent("instructions");

  // Trigger automatically playing
  button.mousePressed(function() {
    if (!autoplay) {
      index = 0;
      autoplay = true;
    }
  });

  // A triangle oscillator
//  osc = new p5.TriOsc();
  // Start silent
//  osc.start();
//  osc.amp(0);

}

// A function to play a note
function playNote(note,duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {

  // If we are autoplaying and it's time for the next note
  if (autoplay && millis() > trigger){
    playNote(notes[song[index].note], song[index].duration);
    trigger = millis() + song[index].duration;
    // Move to the next note
    index ++;
  // We're at the end, stop autoplaying.
  } else if (index >= song.length) {
    autoplay = false;
  }


  // Draw a keyboard

  // The width for each key
  let w = width / notes.length;
  for (let i = 0; i < notes.length; i++) {
    let x = i * w;
    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      // If we're clicking
      if (mouseIsPressed) {
        fill(200,255,150);
      // Or just rolling over
      } else {
        fill(127);
      }
    } else {
      fill(200);
    }

    // Or if we're playing the song, let's highlight it too
    if (autoplay && i === song[index-1].note) {
      fill(200,100,200);
    }

    // Draw the key
    rect(x, 0, w-1, height-1);
  }

}

// When we click
function mousePressed(){




osc.start();
osc.amp(0);

  //if(event.button == 0 && event.clientX < width && event.clientY < height) {
    // Map mouse to the key index
    //let key = floor(map(mouseX, 0, width, 0, notes.length));
    //playNote(notes[key]);

//  }
  if (mouseX <= 150)  {
    mySound1.play();
    alert("you just scared the Elephant");

  }
  if (mouseX >= 200 && mouseX<=250)  {
    mySound2.play();
    alert("NO you just broke the piano");

  }
  if (mouseX >= 300 && mouseX<=350)  {
    mySound3.play();
    alert("Have a wonderful day ");

  }
  if (mouseX >= 400 && mouseX<=500)  {
    mySound4.play();
    alert("welcome to the premere");

  }
  if (mouseX >= 550 && mouseX<=650)  {
    mySound5.play();
    alert("You have just exploded the tallest building");

  }
  if (mouseX >= 700 && mouseX<=800)  {
    mySound6.play();
    alert("Congrats you just won your first race!");

  }
  if (mouseX >= 850 && mouseX<=1000)  {
    mySound7.play();
    alert("You just flushed the toilet");

  }

}

// Fade it out when we release
function mouseReleased() {
  osc.fade(0,0.5);
}
