Webcam.attach('#liveview');

camera = document.getElementById("liveview")

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

function takepic() { Webcam.snap(function(data_uri) { document.getElementById("thepic").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; }); }

    console.log("ml5 version: ", ml5.version)

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gZIG6PHNa/model.json", modelLoaded);

    function modelLoaded(){
        console.log("Model Loaded!")
    }

    function idpic(){
        img = document.getElementById("selfie_image");
        classifier.classify(img, gotResult);
    }

    function gotResult(error, results){
        if(error){
            console.error(error);
        }else {
            console.log(results);
            document.getElementById("name").innerHTML = results[0].label;
            document.getElementById("accur").innerHTML= results[0].confidence.toFixed(3);
        }
    }