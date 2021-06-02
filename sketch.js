var ball1;
var database, position;
var ball1pos

function setup(){

    database = firebase.database();
    createCanvas(500,500);
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";

    ball1pos = database.ref('ball/position');
    ball1pos.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball1.x = ball1.x + x;
    ball1.y = ball1.y + y;
}

function writePosition(){
    database.ref('ball/position').set({
'x' : position.x + x,
'y' : position.y + y
    })
}

function readPosition(data){
    position = data.val();
    ball1.x = position.x;
    ball1.y = position.y;

}

function showError(){
    console.log("ERROR!!!!")
}
