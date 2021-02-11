var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
console.log("isFirefox",isFirefox);
let sound_format=isFirefox ? "ogg" : "mp3";
var sound_samples={
    "bark":new Audio("./src/sound/bark."+sound_format),
    "sheep":new Audio("./src/sound/sheep."+sound_format),
    "step":new Audio("./src/sound/step."+sound_format),
    "bell":new Audio("./src/sound/bell."+sound_format)
};
function playSound(filename,volume) {
    // let audio=new Audio();
    // audio.src=sound_samples[filename].src;
    // audio.volume=volume;
    // audio.play();
    sound_samples[filename].volume=volume;
    sound_samples[filename].currentTime=0;
    sound_samples[filename].play();
}
let music_looping=false;
var song_audio = new Audio("./src/sound/doggy_sunday."+sound_format)

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
