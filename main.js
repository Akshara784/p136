status= "";

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= 'status: detecting objects';
    document.getElementById("object_name");
}

function modelLoaded(){
    console.log("model Loaded!");
    status= true;
}

function draw(){
    video.size(300,600);
}



