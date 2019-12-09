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
  $('.updateUser').show();

}
function logout(){
  $('.signUp-menu').show();
  // $('.alert-logout').show();
  $('.login').show();
  $('.logout').hide();
  $('.updateUser').hide();

}

$(function(){
  $('#imagen').change( function(input){
    var imagen = input.target.files[0];
    if(imagen){
      var leerImagen = new FileReader();
      leerImagen.onload = function(input){
        var resultadoImage = input.target.result;
        $('#mostrarImagen').attr('src', resultadoImage);
      }
      $('#mostrarImagen').show();
      leerImagen.readAsDataURL(imagen);
    }
  } )
})