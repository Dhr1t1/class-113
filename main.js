function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
}

function take_snapshot(){
    save('picture.png');
}

function add_filter(){
    tint_color=document.getElementById("filter").value;
}