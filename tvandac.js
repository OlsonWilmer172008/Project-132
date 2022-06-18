Status = "";
TV_AND_AC_image = "";

function preload(){
    TV_AND_AC_image = loadImage("tvandac.jpeg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(600,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(TV_AND_AC_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(TV_AND_AC_image,0,0,640,350);
}