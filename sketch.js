const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Event = Matter.Event;

var engine, world;
var box1, pig1;
var backgroundImg;
var flag = 0;
var jail;
var game = 0;
var item = 0;
var lives = 3;
var x = -70;
var xx = 37;



function preload(){
    backgroundImg = loadImage("sprites/bg.jpg");
    jail = loadImage("sprites/jail.Png");
    gate = loadImage("sprites/gate.png");
    block = loadImage("sprites/block.jpg");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    ground = new Ground(600,height,1200,20)

    boy = new Bird(600,300,50,100);
    khan = new Man(1020,280,90,200);
    act = new Act1(1160,280,80,200);
    wall = new Log( 150,300,20,270);
    //table = new Box(190,360,70,70);
    
    
    edge = new Log(320,250,150,7);
    edge1 = new Log(470,200,150,7);
    edge2 = new Log(750,150,400,7);
    edge3 = new Log(70 ,175 ,170,20);
    edge4 = new Log(-5,200,6,400);

    box1 = new Bix(1150,40,25,25);
    box2 = new Bix(1050,40,25,25);
    box4 = new Bix2(930,70,10,155);
    box = new Box (600,-5,1200,5);
    
    box3 = new Box(930,70,25,155);

    paper = new Paper(700,130,30,40);
   boy1 = new Bird(800,300,50,100);
 
    cut = new Cut(50,150,55,55);
    carpet = new Carpet(880,130,80,35);
  


    if(game === 0){
      
        
        khan1 = new Man2(750,190,80,170);
        paper1 = new Paper(1075,140,40,50);
        act1 = new Act1(900,190,80,170);
        
        

       
    }
    



}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
   
    ground.display();
    
    boy.display();
    khan.display();
    act.display();
    //table.display(); 
    
    edge3.display();
    wall.display();
   
    edge.display();
    edge1.display();
    edge2.display();

    box1.display();
    box2.display();
    box.display();
    box4.display();
    box3.display();

   
    

    image (jail,-10,200,150,200);
    image (gate,1000,200,200,300);

    if (game === 0){
       image(block,0,0,1200,400);
        fill("black");
        textSize(30);
        text("controls",200,100);
        textSize(15);
        text("move left ---  left arrow key(<-)",160,150);
        text("move right ---  right arrow key(->)",160,170);
        text("jump ---   space key",160,210);
        text("move jump right ---  down arrow key",160,190);
        text("leave jail ---  L key(L)",160,230);
        text(" Rotate ---  R key",160,250);
        
        textSize(30);
        text("charceters",800,50);
        boy1.display();
        khan1.display();
        paper1.display();
        act1.display();
       
        
 
        textSize(12);
        text("ENEMY --- khan ",700,100);
        text("FRIEND --- activist ",850,100);
        text("NEWSPAPER --- activist paper",1000,100);
        text("YOU",820,290);

       
    }
    if(game === 1){
        image(block,800,0,400,400);
        
        paper.display();
        Matter.Body.setPosition(khan1.body,{x:400,y:-100});
        Matter.Body.setPosition(paper1.body,{x:400,y:-100});
        Matter.Body.setPosition(act1.body,{x:400,y:-100});
         
        textSize(20);
        text("Try getting to the newspaper",100,50);
    }
    if(game === 2){
        Matter.Body.setPosition(boy1.body,{x:400,y:-100});
        Matter.Body.setPosition(paper.body,{x:400,y:-100});
        
        cut.display();
        carpet.display();
         
            
        text("Try getting to the activist,he is standing outside",100,50);
        
    }
    
    if(item === 2){
       game = 3;
    }

    if(game === 3){
        Matter.Body.applyForce(khan.body,{x:khan.body.position.x,y:khan.body.position.y},{x:x,y:0});
        Matter.Body.applyForce(khan.body,{x:khan.body.position.x,y:khan.body.position.y},{x:xx,y:15});

        var collisionk = Matter.SAT.collides(khan.body,wall.body);

        if(collisionk.collided){
          x = 69;
          xx = -38;

          Matter.Body.applyForce(khan.body,{x:khan.body.position.x,y:khan.body.position.y},{x:x,y:0});
          Matter.Body.applyForce(khan.body,{x:khan.body.position.x,y:khan.body.position.y},{x:xx,y:14});
          
    }

    var collisionl = Matter.SAT.collides(khan.body,act.body);
    if(collisionl.collided){
         x = -69;
         xx = 39;
 
         Matter.Body.applyForce(khan.body,{x:khan.body.position.x,y:khan.body.position.y},{x:x,y:0});
         Matter.Body.applyForce(khan.body,{x:khan.body.position.x,y:khan.body.position.y},{x:xx,y:14});
        
   }
    
        Matter.Body.setPosition(edge.body,{x:400,y:-100});
        Matter.Body.setPosition(edge1.body,{x:400,y:-100});

        
    }
  
  
   
    ground.display();
   
    var collisionp = Matter.SAT.collides(boy.body,act.body);
    if(collisionp.collided){
    
        Matter.Body.setPosition(khan.body,{x:70,y:320});
       game = 5;
       


    }


    if(game ===1 ){
    var collision1 = Matter.SAT.collides(boy.body,paper.body);
    if(collision1.collided){
        game = 2;
       
    }
}
    if(game ===2){
        var collision1 = Matter.SAT.collides(boy.body,carpet.body);
        if(collision1.collided){
            item = item+1;
            Matter.Body.setPosition(carpet.body,{x:1150,y:40});
           
        }
        var collision1 = Matter.SAT.collides(boy.body,cut.body);
        if(collision1.collided){
            item = item+1;
            Matter.Body.setPosition(cut.body,{x:1050,y:40});
           
        }
    }
    var collision = Matter.SAT.collides(boy.body,khan.body);
    if(collision.collided){
        lives = lives-1;
        flag = 1;


    }

    if (flag === 1){
        if(game === 1){
        Matter.Body.setPosition(boy.body,{x:70,y:320});
        textSize = 3;
        text("press L to leave",600,50);
        if (keyCode === 76){
            Matter.Body.setPosition(boy.body,{x:400,y:320});
            flag = 0;
            }
        }
        if(game === 2){
            Matter.Body.setPosition(boy.body,{x:70,y:320});
            textSize = 3;
            text("press L to leave",600,50);
            if (keyCode === 76){
                Matter.Body.setPosition(boy.body,{x:400,y:320});
                flag = 0;
                }
            }
            if(game === 3){
                Matter.Body.setPosition(boy.body,{x:70,y:320});
                textSize = 3;
                text("press L to leave",600,50);
                if (keyCode === 76){
                    Matter.Body.setPosition(boy.body,{x:400,y:320});
                    flag = 0;
                    }
                }
    }
    
    if(lives===0){
        
        image(block,0,0,1200,400);
        fill("white");
        
       // textSize(30);
       text("Fight against Child Labour",450,150);
       // textSize(20);
        text("Oops. You LOST",480,190)
       // textSize(15);
        text("this is also the fate of millions of children around this world. We also hope that you understand this malicious practice of child labour. ",70,250);
        text("LET'S ALL Eradicate this practice that happens to millions of children around the world",100,280);
    }
    else if(lives<0){
        image(block,0,0,1200,400);
        fill("white");
        
       // textSize(30);
        text("Fight against Child Labour",450,150);
       // textSize(20);
        text("Oops. You LOST",480,190)
       // textSize(15);
        text("this is also the fate of millions of children around this world. We also hope that you understand this malicious practice of child labour. ",70,250);
        text("LET'S ALL Eradicate this practice that happens to millions of children around the world",100,280);
    }

    

    if(game === 5){
        image(block,0,0,1200,400);
        fill("white");

        textSize(30);
        text("Fight against Child Labour",450,150);
        textSize(20);
        text("Congratulations!!! You WON",480,190)
        textSize(15);
        text("We also hope that you understand this malicious practice of child labour. LET'S ALL Eradicate this practice that happens to millions of children around the world. ",100,250);
    }

   

    
    //boy.body.velocity.y = boy.body.velocity.y+1;
}

function keyPressed(){
if(game === 1){
    if (keyCode === 32 ){
       Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:0,y:-100});
       
       
    }
    if (keyCode === RIGHT_ARROW ){
       Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:20,y:0});
       Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:-10,y:3});
    }
    if (keyCode === LEFT_ARROW ){
        Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:-20,y:5});
        Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:10,y:3});
    }
    if (keyCode === DOWN_ARROW ){
         Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:20,y:-100});
      }
    if (keyCode === 82){
        Matter.Body.rotate(boy.body,PI/4);
    }
    
    if (keyCode === 83){
        game = 1;
    }
}
if(game === 2){
    if (keyCode === 32 ){
       Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:0,y:-100});
       
       
    }
    if (keyCode === RIGHT_ARROW ){
       Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:20,y:0});
       Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:-10,y:3});
    }
    if (keyCode === LEFT_ARROW ){
        Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:-20,y:5});
        Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:10,y:3});
    }
    if (keyCode === DOWN_ARROW ){
         Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:20,y:-100});
      }
    if (keyCode === 82){
        Matter.Body.rotate(boy.body,PI/4);
    }
    
    if (keyCode === 83){
        game = 1;
    }
}
if(game === 3){
    if (keyCode === 32 ){
       Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:0,y:-100});
       
       
    }
    if (keyCode === RIGHT_ARROW ){
       Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:20,y:0});
       Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:-10,y:3});
    }
    if (keyCode === LEFT_ARROW ){
        Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:-20,y:5});
        Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:10,y:3});
    }
    if (keyCode === DOWN_ARROW ){
         Matter.Body.applyForce(boy.body,{x:boy.body.position.x,y:boy.body.position.y},{x:20,y:-100});
      }
    if (keyCode === 82){
        Matter.Body.rotate(boy.body,PI/4);
    }
    
    if (keyCode === 83){
        game = 1;
    }
}
if (keyCode === 83){
    game = 1;
}




        
}





