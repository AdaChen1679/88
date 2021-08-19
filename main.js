var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

player_object = "";
block_object = "";

block_width = 30;
block_height = 30;

function playerupdate()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set(
            {
top: player_y,
left: player_x

        });
        canvas.add(player_object);
    });
}

function blockupdate(get_img)
{
fabric.Image.fromURL(get_img, function(Img){
    block_object = Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set(
        {
            top: player_y,
            left: player_x
        }
    );
    canvas.add(block_object);
})
}

window.addEventListener("keydown", my_keydown);
function my_keydown (e)
{
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == "80")
    {
        block_width = block_width+10;
        block_height = block_height+10;
        document.getElementById("currentwidth").innerHTML=block_width;
        document.getElementById("currentheight").innerHTML=block_height;
    }

    else if(e.shiftKey == false && keypressed == "77")
    {
        block_width = block_width-10
        block_height = block_height-10
        document.getElementById("currentwidth").innerHTML=block_width;
        document.getElementById("currentheight").innerHTML=block_height;
    }
    if(keypressed == "37")
    {
        left();
    }
    else if(keypressed == "38")
    {
        up();
    }
    else if(keypressed == "39")
    {
        right();
    }
    else if(keypressed == "40")
    {
        down();
    }

    if(keypressed == "68")
    {
    blockupdate("dark_green.png");
    }
    
    else if(keypressed == "67")
    {
        blockupdate("cloud.jpg");
    }

    else if(keypressed == "71")
    {
        blockupdate("ground.png");
    }

    else if(keypressed == "76")
    {
        blockupdate("light_green.png");
    }

    else if(keypressed == "82")
    {
        blockupdate("roof.jpg");
    }

    else if(keypressed == "84")
    {
        blockupdate("trunk.jpg");
    }

    else if(keypressed == "85")
    {
        blockupdate("unique.png");
    }

    else if(keypressed == "87")
    {
        blockupdate("wall.jpg");
    }

    else if(keypressed == "89")
    {
        blockupdate("yellow_wall.png");
    }
}

function up(){
    if(player_y >=0){
        player_y = player_y - block_height;
        canvas.remove(player_object);
        playerupdate();
    }
}

function down(){
    if(player_y <=350){
        player_y = player_y + block_height;
        canvas.remove(player_object);
        playerupdate();
    }
}

function left(){
    if(player_x >=0){
        player_x = player_x - block_width;
        canvas.remove(player_object);
        playerupdate();
    }
}

function right(){
    if(player_x <=650){
        player_x = player_x + block_width;
        canvas.remove(player_object);
        playerupdate();
    }
}