var canvas=new fabric.Canvas("myCanvas");

block_width=30;
block_height=30;
player_x=10;
player_y=10;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=='187'){
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keyPressed=='187'){
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='39'){
        right();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='67'){
        new_img('cloud.jpg');
    }
    if(keyPressed=='68'){
        new_img('dark_green.png');
    }
    if(keyPressed=='71'){
        new_img('ground.png');
    }
    if(keyPressed=='76'){
        new_img('light_green.png');
    }
    
    if(keyPressed=='78'){
        new_img('netherwrack.jpg');
    }

    if(keyPressed=='84'){
        new_img('trunk.jpg');
    }
    if(keyPressed=='80'){
        new_img('glowpowder.png');
    }
    if(keyPressed=='66'){
        new_img('brickstone.jpg');
    }
    if(keyPressed=='89'){
        new_img('yellowbrick.png');
    }
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_width;
        canvas.remove(player_object);
        player_update();
    }
}