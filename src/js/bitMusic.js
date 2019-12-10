function chageSong(nameSong) {
  $("#videoBitMusic").attr("src", "/assets/audios/" + nameSong + ".mp3");
  let autoplayVideo = $("#videoBitMusic").get(0);
  autoplayVideo.load();
  autoplayVideo.play();
}

function login() {
  setTimeout(function () {
    var sss = JSON.parse(localStorage.getItem("sesion"));
    if (sss !== null) {
      userLoged();
    }
    console.log(sss);
  }, 2000);
}

function userLoged(){
  $('.signUp-menu').hide();
  $('.login').hide();
  $('.logout').show();
  $('.updateUser').show();
}
function logout() {
  $('.signUp-menu').show();
  // $('.alert-logout').show();
  $('.login').show();
  $('.logout').hide();
  $('.updateUser').hide();

}

$(function () {
  var sss = JSON.parse(localStorage.getItem("sesion"));
    if (sss !== null) {
      userLoged();
    }
})