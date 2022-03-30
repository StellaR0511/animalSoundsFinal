function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5mKjFm4ke/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);    
}

var dog = 0;
var cat = 0;
var cow = 0;
var horse = 0;
var elephant = 0;
var background = 0;

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r = Math.floor(Math.random()* 255)+1;
        random_g = Math.floor(Math.random()* 255)+1;
        random_b = Math.floor(Math.random()* 255)+1;


        document.getElementById("result_label").innerHTML = 'Detected Voice is Of - '+results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+' | Detected Cat - '+cat+' | Detected Cow - '+cow+' | Detected Horse - '+horse+' | Detected Elephant - '+elephant+' | Background Noise - '+background;
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_count").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img = document.getElementById("animal_image");

        if(results[0].label == "Dog"){
            img.src = 'bark.gif';
            dog = dog+1;
        }
        else if(results[0].label == "Cat"){
            img.src = 'meow.gif';
            cat = cat+1;
        }
        else if(results[0].label == "Cow"){
            img.src = 'moo.gif';
            cow = cow+1;
        }
        else if(results[0].label == "Horse"){
            img.src = 'neigh.gif';
            horse = horse+1;
        }
        else if(results[0].label == "Elephant"){
            img.src = 'elephant.gif';
            elephant = elephant+1;
        }
        else if(results[0].label == "Background Noise"){
            img.src = 'ear.webp';
            background = background+1;
        }
        else{
            img.src = 'ear.webp';
            background = background+1;
        }
    }
}
