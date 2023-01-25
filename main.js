
function setup()
{
  
    canvas = createCanvas(900,325);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(900,325);
    video.parent('game_console');
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
   
}
function modelLoaded()
{
  console.log('Model Loaded!');
  poseNet.on('pose,gotPoses')
}