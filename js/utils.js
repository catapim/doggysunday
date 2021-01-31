function playSound(filename) {
    var audio = new Audio("./src/sound/" + filename + ".wav");
    audio.play();
  }