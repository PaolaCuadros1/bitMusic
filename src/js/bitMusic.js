function chageSong(nameSong) {
  $("#videoBitMusic").attr("src", "/assets/audios/" + nameSong + ".mp3");
  let autoplayVideo = $("#videoBitMusic").get(0);
  autoplayVideo.load();
  autoplayVideo.play();
}

function login(){
  $('.signUp-menu').hide();
  $('.login').hide();
  $('.logout').show();
}
function logout(){
  $('.signUp-menu').show();
  $('.alert-logout').show();
  $('.login').show();
  $('.logout').hide();
}