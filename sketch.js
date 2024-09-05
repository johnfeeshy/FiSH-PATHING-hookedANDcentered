/* *Bwak Bwak Bwaaak* by John 'Feeshy' Walker */

/*Can click to make fullscreen*/

/*variable used as a counting number*/
let rot = 0;

/*Videos - V prefix*/
let VchickenGreen;
let VchickenTractor;
let VchickenZombie;
let VchickenArms;
let Vchicken2hearts;
let VchickenBow;
let Vchicken444;

/*Images - I prefix*/
let IchickenEmoji;

function setup() {
    /*Canvas is the size of the window*/
    createCanvas(windowWidth, windowHeight, WEBGL);
    fullscreen();
    
    noCursor();
    
    
    /*Loading videos that loop, are muted, and are hidden so they can be shown by a different function*/
  VchickenGreen = createVideo(['assets/fishingplanet2.mp4']);
  VchickenGreen.elt.muted = true;
  VchickenGreen.loop();
  VchickenGreen.hide();
    
  VchickenTractor = createVideo(['assets/fishL.mp4']);
  VchickenTractor.elt.muted = true;
  VchickenTractor.loop();
  VchickenTractor.hide();
    
  VchickenZombie = createVideo(['assets/ChickenZombie.webm']);
  VchickenZombie.elt.muted = true;
  VchickenZombie.loop();
  VchickenZombie.hide();
    
  VchickenArms = createVideo(['assets/ChickenArms.webm']);
  VchickenArms.elt.muted = true;
  VchickenArms.loop();
  VchickenArms.hide();
    
  Vchicken2hearts = createVideo(['assets/fishR.mp4']);
  Vchicken2hearts.elt.muted = true;
  Vchicken2hearts.loop();
  Vchicken2hearts.hide();
    
  VchickenBow = createVideo(['assets/fishingsim.mp4']);
  VchickenBow.elt.muted = true;
  VchickenBow.loop();
  VchickenBow.hide();
    
  Vchicken444 = createVideo(['assets/chicken444.webm']);
  Vchicken444.elt.muted = true;
  Vchicken444.loop();
  Vchicken444.hide();
    
    /*Loads image*/
  IchickenEmoji = loadImage('assets/blowfish_1f421.png');

}

/*Recalculates if window size changes and restarts the program if the window size changes to avoid any unintended weirdness/cropping*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {    
    centerVideo();
    
    CenterChickens();

    translate(-windowWidth/4,0);
    leftVideo();
    
    translate(windowWidth/2,0);
    rightVideo();
    
    push();
    translate(-640,0,0);
    scale(10);
    r0tator();
    pop();
    
    push();
    translate(-6000,20,0);
    scale(10);
    r0tator();
    pop();
    
}

/*All videos have noStroke and noFill to get rid of default alpha channel fill color and the border surrounding video frame*/

/*Places the video playing in the center of the 4 chickens*/
function centerVideo() {
    push();
    noStroke(); /*hides the video frame outline*/
    noFill();
   /* texture(Vchicken444);
    rectMode(CENTER);
    rect(0,0, 500,300);
    pop();
    */
}

/*4 chicken emojis come from the center scale out*/
function CenterChickens() {
    noFill();
    noStroke();
   /* image(IchickenEmoji, 0, 0,rot+rot*3,rot*rot);
    image(IchickenEmoji, -rot, 0,rot*rot,rot); 
    image(IchickenEmoji, -rot, -rot,rot*rot,rot);
    image(IchickenEmoji, 0, -rot,rot,rot*rot);
    */
}

/*Left video playing the tractor video with green torus frame*/
function leftVideo(){
    /*These 2 functions create the square in the center of the screen*/
    push();
    complications();
    greenSquare();
    pop(); 
    
    /*video playing in center of green square*/
    chickenTractor();
}

/*Creates the tractor video*/
function chickenTractor(){
    translate(-10,0,0);
    noStroke(); /*hides the video frame outline*/
    texture(VchickenTractor);
    rectMode(CENTER);
    rect(0,0, 500,300);
}

/*Right video playing the 2 of hearts video with green torus frame*/
function rightVideo(){
    /*These 2 functions create the square in the center of the screen*/
    push();
    complications();
    greenSquare();
    pop(); 
    
    /*video playing in center of green square*/
    chicken2hearts();
}

/*Creates the 2 of hearts video*/
function chicken2hearts(){
    translate(10,0,0);
    noStroke(); /*hides the video frame outline*/
    texture(Vchicken2hearts);
    rectMode(CENTER);
    rect(0,0, 500,300);
}

/*complications and greenSquare create the frames around the left and right video*/
function complications() {
  stroke(255,2,0,0);
  strokeWeight(.08);
  scale(.1);
  translate(random(-windowWidth,windowWidth), 0, 50);
  push();
  rotateZ(rot * 1.5);
  rotateX(rot * 2);
  rotateY(rot * 2);
  pop();
  rot += 0.05;
}
function greenSquare() {
  stroke(255,2,0,0);
  strokeWeight(.01);
  push();
  scale(2);
  translate(0, random(-windowHeight,windowHeight), 50);
  rotateZ(rot * 1.5);
  rotateX(rot * 2);
  rotateY(rot * 2);
  texture(VchickenGreen);
  torus(4000);
  pop();
  rot += 0.05;
}

/*The giant spinning cone with video playing on it*/
function r0tator() {
  
  noStroke();
  push();
  scale(0);
    translate(100, 20, 0);
  rotateY(radians(rot));
  rotateZ(radians(rot));
  rotateX(radians(13-rot));
  texture(VchickenBow);
  cone(75);
  pop();
    translate(rot + 50, rot, rot);
  
    
}






