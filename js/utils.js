function playSound(filename) {
    var audio = new Audio("./src/sound/" + filename + ".wav");
    audio.play();
  }

function loopMusic() {
    var audio = new Audio("./src/sound/doggy_sunday.wav")
    audio.addEventListener("ended", function() {
        this.currentTime=0;
        this.play();
    })
    audio.play();
}

function randomSheepSound() {
   var audio = new Audio("./src/sound/sheep.wav")
//    audio = collection[audio];
   audio.play();
//    setTimeout(audio.duration*2000);
   var number = Math.floor(Math.random() * 2);

   if (number == 0) {
   audio.play();
   }
}

    //    var audio = new Audio("beep.mp3");
//    } else if (number = 1) {
//     //    var audio = new Audio("bloop.mp3");
//     audio.play();

// }
   
//    audio.play();
