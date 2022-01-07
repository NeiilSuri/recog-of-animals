function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/wAir6STCl/model.json ', modelReady);
  var blank = document.getElementById('blank');
}
console.log('ml5 version:',ml5.version)
function modelReady(){
  classifier.classify(gotResults);
}
function gotResult(error, result){
  if(error){
    console.error(error);
}
else{
  console.log(results);
  random_number_r = Math.floor(Math.random() * 255) + 1;
  random_number_g = Math.floor(Math.random() * 255) + 1;
  random_number_b = Math.floor(Math.random() * 255) + 1;

  document.getElementById("blank").innerHTML = results[0].label;
  var img  =  document.getElementById('animal-img');
  var img1  =  document.getElementById('animal-img1');
  var img2 =  document.getElementById('animal-img2');
  var img3 =  document.getElementById('animal-img3');
  if(results[0].label == "Lion"){
    img.style.transform = "translateX(-200px)";
    document.getElementById('blank').innerhTMl = results[0].label;
  }
}
}