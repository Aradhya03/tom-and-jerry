
function preload() {
    //load the images here
    catsitimg=loadImage("cat1.png");
    catmovingimg=loadAnimation("cat2.png", "cat3.png");
    gardenimg=loadImage("garden.png");
    catsit2img=loadImage("cat4.png");
    mouseteasingimg=loadAnimation("mouse1.png", "mouse3.png");
    mousehappyimg=loadImage("mouse2.png");
    mousewalking=loadImage("mouse4.png");


}


function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here

    garden=createSprite(500, 300, 10, 10);
    garden.addImage("garden image" , gardenimg);
    garden.scale=1.2;

    tomsitting=createSprite(900, 500, 10, 10);
    tomsitting.addImage("tom sitting img", catsitimg);
    tomsitting.scale=0.2;
    


    tommoving=createSprite(900, 500, 10, 10);
    tommoving.addAnimation("tom moving", catmovingimg);
    tommoving.scale=0.2;
    tommoving.visible=false;

    tomhappy=createSprite(900, 500, 10, 10);
    tomhappy.addImage("tom sitting2", catsit2img);
    tomhappy.scale=0.2;
    tomhappy.visible=false;

    jerryteasing=createSprite(100, 500, 10, 10);
    jerryteasing.addAnimation("jerry teasing tom", mouseteasingimg);
    jerryteasing.scale=0.2;
    jerryteasing.setCollider("circle", 0, 0, 60);


    jerryhappy=createSprite(100, 500, 10, 10);
    jerryhappy.addImage("jerry happy", mousehappyimg);
    jerryhappy.scale=0.2;
    jerryhappy.visible=false;

    jerrywalking=createSprite(100, 500, 10, 10);
    jerrywalking.addImage("jerry walking", mousewalking);
    jerrywalking.scale=0.2;
    jerrywalking.setCollider("circle", 0, 0, 60);


    invisiblebarrierjerry=createSprite(840, 500, 10, 50);
    invisiblebarrierjerry.visible=false;
    invisiblebarriertom=createSprite(10, 500, 10, 50);
    invisiblebarriertom.visible=false;
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide


    jerrywalking.collide(invisiblebarrierjerry);
    jerryteasing.collide(invisiblebarrierjerry);
    tommoving.collide(invisiblebarriertom);
    tomsitting.collide(invisiblebarriertom);
    

    if(keyDown("right")){
        jerryteasing.visible=false;
        jerrywalking.visible=true;
        jerrywalking.x=jerrywalking.x+4;
        jerryteasing.x=jerryteasing.x+4;
        jerryhappy.x=jerryhappy.x+4;

        tomsitting.visible=false;
        tommoving.visible=true;
        tommoving.x=tommoving.x-4;
        tomsitting.x=tomsitting.x-4;
        tomhappy.x=tomhappy.x-4;
    }else{
        jerryteasing.visible=true;
        jerrywalking.visible=false;
        tomsitting.visible=true;
        tommoving.visible=false;
    }


    //if(jerrywalking.x - tommoving.x < tommoving.width/2 + jerrywalking.width/2 
      //  && tommoving.x - jerrywalking.x < tommoving.width/2 + jerrywalking.width/2
        //&& jerrywalking.y - tommoving.y < tommoving.height/2 + jerrywalking.height/2 
        //&& tommoving.y - jerrywalking.y < tommoving.height/2 + jerrywalking.height/2
    //){
      //  jerrywalking.visible=false;
        //tommoving.visible=false;

        //jerryhappy.visible=true;
        //tomhappy.visible=true;
    //}

    if(jerrywalking.isTouching(tommoving)){
        jerryhappy.visible=true;
        jerrywalking.visible=false;
        jerryteasing.visible=false;
        
        tommoving.visible=false;
        tomsitting.visible=false;
        tomhappy.visible=true;
        
    }else{
       tomhappy.visible=false;
       jerryhappy.visible=false;
        //jerryteasing.visible=true;
       // jerrywalking.visible=true;
       // tommoving.visible=true;
       // tomsitting.visible=true;
    }

    

    drawSprites();
}


