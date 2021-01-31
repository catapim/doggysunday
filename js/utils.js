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