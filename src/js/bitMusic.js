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
//javascript puro
/* document.getElementById('imagen') */

//aqui estamos usando Jquery y estamos llamando le id de imagen

$(function(){// este function se coloca para que lo que este aqui se cargue despues de que se cargue la pagina completa
$('#imagen').change(function(input){
 /*  alert("nnnnn"); */
 var imagen = input.target.files[0];
 if(imagen){
   var leerImagen = new FileReader();
   leerImagen.onload = function(input){
     var resultadoImage = input.target.result;
     $ ('#mostrarImagen').attr('src', resultadoImage);//este attr este modifica un atributo en el HTML
   }
   $('#mostrarImagen').show();
   leerImagen.readAsDataURL(imagen);
 }
})
})