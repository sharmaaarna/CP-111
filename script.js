Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:90
  });
  
  function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Selfie").innerHTML="<img id='howUdoing' src='"+data_uri+"'>";
    });
}

clasefier=('https://teachablemachine.withgoogle.com/models/klJzDtM9C/model.json',modelLoaded);