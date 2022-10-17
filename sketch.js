let x1,x2,y2,x3,y3,x4;

function setup() {
  createCanvas(500, 500);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB,360,100,100,100);
  translate(width / 2, height / 2);
  let petals = random(8,40); //set number of petals here
  let layers = random(4,40);
  let angles = 360/petals;

  //create each layer with different variables
  for(let j=layers ;j>0; j--){
    let lay = j/layers;
    x1 = random(185*lay,205*lay);
    x4 = random(230*lay,245*lay);
    x2 = random(190*lay,215*lay);
    let max_X2 = x2*tan(angles)*0.9;
    y2 = random(15*lay,max_X2*lay);
    x3 = random(210*lay,230*lay);
    y3 = random(15*lay,max_X2);
    let hue = random(256);
    let sat = random(70,100);
    let brt = random(70,100);
    let alph = random(40,100);
    fill(hue,sat,brt,alph);
    //draw petal for one layer
    for(let i = 0; i < petals; i++){
      noStroke();
      beginShape();
        curveVertex(x1, 0);
        curveVertex(x1, 0);
        curveVertex(x2, y2);
        curveVertex(x3, y3);
        curveVertex(x4, 0);
        curveVertex(x4, 0);
      endShape();
      beginShape();
        curveVertex(x1, 0);
        curveVertex(x1, 0);
        curveVertex(x2, -y2);
        curveVertex(x3, -y3);
        curveVertex(x4, 0);
        curveVertex(x4, 0);
      endShape();
      strokeWeight(5);
      rotate(angles);
    }
    rotate(angles/2)
  }
}

function draw() {
  // put drawing code here
}

