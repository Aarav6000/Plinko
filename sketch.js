const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];
var score = 0;
var divisionHeight = 500;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ball = new Particle(250, 10);

  ground = new Ground(250, 750, 500, 20);

  for (var i = 0; i <= width; i += 80) {
    divisions.push(new Division(i, 650));
  }

  for (let j = 75; j <= width - 20; j += 50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (let j = 50; j <= width - 10; j += 50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (let j = 75; j <= width - 20; j += 50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (let j = 50; j <= width - 10; j+=50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  textSize(24);
  fill(0, 131, 255);
  text("score: " + score, 200, 500)

  ball.display();

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if(frameCount % 50 === 0){
    particles.push(new Particle(random(width/2 - 30, width/2 + 30), 20));
    score++;
  }
  for (let j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (let k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  ground.display();

  drawSprites();
}