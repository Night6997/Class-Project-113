function preload(){

}

function setup(){

    canvas=createCanvas(840,480);
    canvas.position(350,350);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){

    image(video, 0,0,840,480);
    tint(tint_color);

}

function takeSnapshot(){
    save("filteredImage.png");
}

function Filter(){

    tint_color=document.getElementById("input1").value;

}