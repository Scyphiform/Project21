const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine,world;
var ground, hero, fly;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1000,750,10000,10)
  hero = new Hero(900,100)
  fly = new Fly(hero.body,{x:1000, y:50})


}

function draw() {
  background(100);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();

}

