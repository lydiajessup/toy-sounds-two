//edited from Allison Parish's example

//////////////////////
// Global Bars
///////////////////////

//////Slider

//state check
let dragging = false; // Is the slider being dragged?
let rollover = false; // Is the mouse over the slider?

// Rectangle variables for slider
let sliderx = 100;
let slidery = 100;
let barw = 10;
let barh = 50;
// Start and end of slider
let sliderStart = 50;
let sliderEnd = 1050;
let sliderLength = sliderEnd-sliderStart;
console.log(sliderLength);

// Offset for dragging slider
let offsetX = 0;

///////Page elements
let brooklyn = sliderStart;
let bronx = sliderLength/5;
let manhat = sliderLength/5*2;
let queens = sliderLength/5*3;
let staten = sliderLength/5*4;
let borough = [0, bronx, manhat, queens, staten];
let boroughlabel = ["Bee", "Bird", "River", "Rocks", "Footsteps"];
//console.log(borough);

//label dimensions
let labelw = sliderLength/5;
let labelh = 20;
let labelpad = sliderLength/10;

// Numbering

  //Community Boards
  //Bronx - 12
  //Brooklyn - 18
  //Manhattan - 12
  //Queens - 14
  //Staten Island - 3

let bkNum = 18;
let bxNum = 12;
let mNum = 12;
let qNum = 14;
let sNum = 3;

let bkTicks = labelw/bkNum;
let bxTicks = labelw/bxNum;
let mTicks = labelw/mNum;
let qTicks = labelw/qNum;
let sTicks = labelw/sNum;

let numArray = [bkNum, bxNum, mNum, qNum, sNum];
let ticksArray = [bkTicks, bxTicks, mTicks, qTicks, sTicks];



///////////////////////
// Preload sounds
//////////////////////

function preload() {
  soundFormats('m4a', 'mp3', 'wav');
  soundtest1 = loadSound('sounds/Nycb_test_1.m4a');
  soundtest2 = loadSound('sounds/Nycb_test_2.m4a');
  beesound = loadSound('sounds/bee.mp3');
  birdsound = loadSound('sounds/bird.mp3');
  riversound = loadSound('sounds/river.wav');
  rockssound = loadSound('sounds/rocks.wav');
  walksound = loadSound('sounds/walk.wav');
}


/////////////////////////
// Setup
////////////////////////

function setup() {
  createCanvas(1150, 360);

}

////////////////////////
// Draw
////////////////////////

function draw() {
  ////colors
  let teal = color('#3AB08B');
  let darkorange = color('#F36E44');
  let lightorange = color('#E09634');
  //let purple = color('#7E81BE');
  //let yellow = color('#DFD638');
  let blue = color('#3C558F');
  let lightgreen = color('#91B489');
  let darkgreen = color('#3E5F33');

  let red = color(255,0,0);
  let darkblue = color(0,79,183);
  let purple = color(131, 0, 183);
  let yellow = color(252, 241, 42);
  let lightblue = color(42, 228, 252);


  background(yellow);

  //make rectangles for borough labels
  fill(purple);
  //stroke(0);
  strokeWeight(2);

  for (let i = 0; i < borough.length; i++){

    rect(sliderStart + borough[i], slidery-labelh, labelw, labelh);
  }

  //Add Text
  textAlign(CENTER, BOTTOM);
  noStroke();
  fill(yellow);

  for (let i = 0; i < boroughlabel.length; i++){
    text(boroughlabel[i], sliderStart+borough[i]+labelpad, slidery);
  }

  //Add number labels
  textSize(20);
  textStyle(NORMAL);
  noStroke();

  let numText = [1,".", ".", ".", 5, ".", ".", ".", ".", 10, ".", ".", ".", ".", 15, ".", ".", "."];
  //console.log(bkText);

  for (j = 0; j < numArray.length; j++){
    //stroke(0);
    fill(darkgreen);
    for (let i = 0; i < numArray[j]; i++){
      //text(numText[i], sliderStart+borough[j]+ticksArray[j]*i, slidery+barh+15);
    }
  }


  ///////////////////////////
  // Make Slider Bars
  ///////////////////////////

  // Check to see if slider is being dragged
  if (dragging) {
    sliderx = mouseX + offsetX;
  }

  // Keep rectangle within limits of slider
  sliderx = constrain(sliderx, sliderStart, sliderLength-barw+sliderStart);

  // Draw a rect for bar
  stroke(0);
  fill(lightblue);
  rect(sliderStart, slidery, sliderLength, barh);
  //line(sliderStart, slidery + barh / 2, sliderEnd, slidery + barh / 2);

  // Draw rectangle for slider
  fill(red);
  rect(sliderx, slidery, barw, barh);

  stroke(0);
  // Fill rectanngles according to state
  if (dragging) {
    fill(50);
  } else {
    fill(175);
  }

  // // Map slider range onto colors
  // let b = map(sliderx, sliderStart, sliderLength - barw, 0, 255);
  // fill(b);
  // rect(sliderStart, slidery+barh*2, sliderLength, 150);
}

//playNotes();


//////////////////////////
// Functions
/////////////////////////

function mousePressed() {
  // Did I click on slider?
  if (mouseX > sliderx && mouseX < sliderx + barw && mouseY > slidery && mouseY < slidery + barh) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = sliderx - mouseX;
  }

  //stop all souds
  beesound.stop();
  birdsound.stop();
  riversound.stop();
  rockssound.stop();
  walksound.stop();

}

function mouseReleased() {
  // Stop dragging
  dragging = false;

  console.log(sliderx);

  //play test sound when bar is released

  // let brooklyn = sliderStart;
  // let bronx = sliderLength/5;
  // let manhat = sliderLength/5*2;
  // let queens = sliderLength/5*3;
  // let staten = sliderLength/5*4;

  //
  // riversound
  // rockssound
  // walksound

  //play Bee
  if (sliderx >= sliderStart & sliderx <= sliderStart+bronx){
    beesound.setVolume(0.1);
    beesound.play();
  }

  //Play Bird
  if (sliderx >= sliderStart+bronx & sliderx <= sliderStart+manhat){
     birdsound.setVolume(0.1);
     birdsound.play();
  }

  //Play River
  if (sliderx >= sliderStart+manhat & sliderx <= sliderStart+queens){
     riversound.setVolume(0.1);
     riversound.play();
  }

  //Play Rocks
  if (sliderx >= sliderStart+queens & sliderx <= sliderStart+staten){
     rockssound.setVolume(0.1);
     rockssound.play();
  }

  //Play Footsteps
  if (sliderx >= sliderStart+staten & sliderx <= sliderStart+sliderLength){
     walksound.setVolume(0.1);
     walksound.play();
  }

}

// function playNotes(){
//   //take value of slider x and covert it to corresponding array value
//   //for now testing one sound
//   soundTest.setVolume(0.1);
//   soundTest.play
// }
