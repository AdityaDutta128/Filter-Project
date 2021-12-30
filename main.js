X = 0;
Y = 0;


function preload() {
moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results) {
if (results.length > 0) {
    console.log(results);
    X = results[0].pose.nose.x - 40;
    Y = results[0].pose.nose.y;
}
}


function modelLoaded() {
    console.log("pose net is initialized");
}

function draw() {
    image(video,0,0,300,300);
    image(moustache,X,Y,80,35);
}

function take_snapshot() {
    save('myfilteredimage.png');
}