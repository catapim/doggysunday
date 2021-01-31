
var sound_samples={
    "bark":new Audio("./src/sound/bark.wav"),
    "sheep":new Audio("./src/sound/sheep.wav"),

};
function playSound(filename) {
    let audio=new Audio();
    audio.src=sound_samples[filename].src;
    audio.play();
}
let music_looping=false;
var song_audio = new Audio("./src/sound/doggy_sunday.wav")

function loopMusic() {
    if(music_looping==false) {
        music_looping=true;
        song_audio.addEventListener("ended", function() {
            this.currentTime=0;
            this.play();
        })
        song_audio.play();
    }

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
