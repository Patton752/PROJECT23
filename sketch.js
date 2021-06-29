var helicopter,helicopterimage
var package,packageimage

const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body

function preload(){
    helicopterimage=loadImage("helicopter.png")
    packageimage=loadImage("package.png")
}

function setup(){
    createCanvas(800.700)
    rectMode(CENTER)
    package=createSprite(width/2,80,10,10)
    package.addImage(packageimage)
    package.scale=0.2

    helicopter=createSprite(width/2,200,10,10)
    helicopter.addImage(helicopterimage)
    helicopter.scale=0.6

    ground=createSprite(width/2,height-35,width,10)
    ground.shapeColor="brown"
    
    engine=Engine.create()
    world=engine.world

    var options={
        restitutuion:0.4,
        isStatic:true
    }
    packagebody=Bodies.circle(width/2,200,5,options)
    World.add(world,packagebody)
    
    var options={
        isStatic:true
    }
    groundbody=Bodies.rectangle(width/2,650,width,10,options)
    World.add(world,groundbody)

    boxposition=width/2-100
    boxY=6

    boxleftSprite=createSprite(boxposition,boxY,20,100)
    boxleftSprite.shapeColor="black"
    var options={
        isStatic:true
    }
    boxleftbody=Bodies.rectangle(boxposition+20,boxY,20,100,options)
    World.add(world,boxleftSprite)

    boxrightSprite=createSprite(boxposition+200,boxY,20,100)
    boxrightSprite.shapeColor="black"
    var options={
        isStatic:true
    }
    boxrightbody=Bodies.rectangle(boxposition+200-20,boxY,20,100,options)
    World.add(world,boxrightSprite)

    boxbaseSprite=createSprite(boxposition+!00,boxY+40,200,20)
    boxbaseSprite.shapeColor="black"
    var options={
        isStatic:true
    }
    boxbasebody=Bodies.rectangle(boxposition+100,boxY+45-20,200,20,options)
    World.add(world,boxbaseSprite)
    
}
function draw(){
    background(0)
    Engine.run(engine)
    rectMode(CENTER)

    package.x=packagebody.position.x
    package.y=package.position.y
    drawSprites()
}
function  keyPressed(){
    if(keyCode===LEFT_ARROW){
        helicopter.x=helicopter.x-20
        trasnslation={
            x:-20,
            y:0
        }
        Matter.Body.translate(packagebody,trasnslation)
    }
    else if(keyCode===RIGHT_ARROW){
        helicopter.x=helicopter.x+20
        trasnslation={
            x:+20,
            y:0
        }
        Matter.Body.translate(packagebody,trasnslation)
    }
    else if(keyCode===DOWN_ARROW){
        Matter.Body.setStatic(packagebody,false)
    }
}
