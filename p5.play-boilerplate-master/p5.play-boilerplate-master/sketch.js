 var fixrec,movrec;




function setup() {
  createCanvas(800,400);
  fixrec=createSprite(200,300,50,60);
  fixrec.shapeColor="blue";
  movrec=createSprite(600,100,80,40);
  movrec.shapeColor="blue";




}

function draw() {
  background("black");
  movrec.x=World.mouseX;
  movrec.y=World.mouseY;
if(movrec.x - fixrec.x <  movrec.width/2 + fixrec.width/2   && fixrec.x-movrec.x < movrec.width/2 + fixrec.width/2  
  && movrec.y - fixrec.y <  movrec.width/2 + fixrec.width/2  
  &&   fixrec.y-movrec.y < movrec.width/2 + fixrec.width/2  ){
 movrec.shapeColor="violet";
 fixrec.shapeColor="red";

}

else  {
  movrec.shapeColor="blue";
  fixrec.shapeColor="blue";

}
  
  drawSprites();
}