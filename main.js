Ariana_mp3 = "";
Taylor_mp3 = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    Ariana_mp3 = loadSound("Ariana Grande - Dangerous Woman (Audio).mp3");
    Taylor_mp3 = loadSound("Taylor Swift - Wildest Dreams(Taylor's Version)(Official Audio).mp3");
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log("PosNet Is Initializing");
}

function draw()
{
    image(video, 0, 0, 500, 500);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " & leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " & rightWristY = " + leftWristY);
    }
}