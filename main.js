leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(50,110);

    canvas = createCanvas(700,500);
    canvas.position(480,160);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#5196e3");
    document.getElementById("font_size").innerHTML = "Font Size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('Abhinav', 50, 400);
}

function modelLoaded() {
    console.log("PoseNet is Initialized!");
}

function gotPoses(results,error) {
    if (error) {
        console.error(error);
    }
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference = " + difference);
    }
}