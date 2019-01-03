// no protect
var t;
var mic;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  t = 0;
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0,1);

  var r = 255 * noise(t+random(0,20));
  var g = 255 * noise(t+25);
  var b = 255 * noise(t+35);

  var vol = mic.getLevel();
  var growth = map(vol*20, 0, 1, 1, 100);
  var repetition = map(vol*20, 0, 1, 10, 50);
  var linegrowth = map(vol*50, 0, 1, 2, 200);

  var x = width * noise(t);
  var y = height * noise(t+1);

  noStroke();
  fill(r,g,b);
  // no protect
  for (var i = 0; i < repetition; i += 1) {
  rect(x + randomGaussian() * growth, y + randomGaussian() * growth, linegrowth, 2);
  //rect(x + randomGaussian() * 10, y + randomGaussian() * 10, linegrowth, 2); //creates horizontal streaks
  // no protect
  }

  t = t + 0.005;
}
