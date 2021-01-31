function playSound(filename) {
    var audio = new Audio("./src/sound/" + filename + ".mp3");
    audio.play();
  }