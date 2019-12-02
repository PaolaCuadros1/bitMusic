function chageSong(nameSong) {
  $("#videoBitMusic").attr("src", "/assets/audios/" + nameSong + ".mp3");
  let autoplayVideo = $("#videoBitMusic").get(0);
  autoplayVideo.load();
  autoplayVideo.play();
}