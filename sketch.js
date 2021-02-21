/***********************************************************************************
	SimpleStateMachine 
	by Mary Huang

    Overview - This is a template for a simple state machine that goes between five states
 
    ---------------------------------------------------------------------
    (*)Notes: (ie: To be fixed, I Need Help With, Clarify This, etc etc: )
     (1) how to make a function with one variable random assign to the thing on a list?

***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/stress.png');
  images[1] = loadImage('assets/sleepy.png');
  images[2] = loadImage('assets/calm.png');
  images[3] = loadImage('assets/craving.png');
  images[4] = loadImage('assets/happy.png');
  images[5] = loadImage('assets/splash.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();

  // print text on screen
  text("Press 1-5 to change mood", width/2+30, height - gTextOffset - 40);
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   image(images[5],width/2, height/2);
}

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   background(107, 57, 57);
   image(images[0],width/2, height/2);
   

   fill(255, 255, 255);
   text("Stress", width/2+30, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   background(16, 90, 130);
   image(images[1],width/2, height/2);
   

   fill(255, 255, 255);
   text("Sleepy", width/2+30, height - gTextOffset);


//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   background(100, 101, 113);
   image(images[2],width/2, height/2);
   

   fill(255, 255, 255);
   text("Calm", width/2+30, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   background(232, 222, 154);
   image(images[3],width/2, height/2);
 

   fill(255, 255, 255);
   text("Craving", width/2+30, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   background(237, 191, 154);
   image(images[4],width/2, height/2);
   

   fill(255, 255, 255);
   text("Happy", width/2+30, height - gTextOffset);
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawSplash ) {
    return;
  }

  if( key === '1' ) {
    drawFunction = drawOne;
  }
  else if( key === '2' ) {
    drawFunction = drawTwo;
  }
  else if( key === '3' ) {
    drawFunction = drawThree;
  }
  else if( key === '4' ) {
    drawFunction = drawFour;
  }
  else if( key === '5' ) {
    drawFunction = drawFive;
  }

  else if( key === 's' ) {
    drawFunction = drawSplash;
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawOne;
  }
}
