import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../../servicio/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public usuarioActualizar: Usuario;
  public archivoSubir: File;
  // public archivoSubir: Array<File>;
  public url: String;
  public identidad;
  constructor(
    private usuarioService : UsuarioService,
    private _router: Router,

  ) {
    this.url = usuarioService.url
   }

  ngOnInit() {
    this.usuarioActualizar = JSON.parse(localStorage.getItem("sesion"));
    this.identidad = this.usuarioService.obtenerNombreUsuario();

  }

  subirArchivo(fileInput: any) {
    this.archivoSubir = <File>fileInput.target.files[0];//recoger archivos seleccionados en el input
    // this.archivoSubir = <Array<File>>fileInput.target.files[0];

  }

  actualizarUsuario(){
    this.usuarioService.actualizarUsuario(this.usuarioActualizar._id,this.usuarioActualizar).subscribe(
      (response:any)=>{
        if(response.usuario){
          // this.actualizacionCorrecta = "Datos actualizados correctamente";
          swal("", `Tus datos han sido actualizados correctamente!!`, "success");
          //alert(`Tus datos han sido actualizados correctamente!!`)
          localStorage.setItem("sesion",JSON.stringify(this.usuarioActualizar));
          this.identidad = this.usuarioService.obtenerNombreUsuario();

          if(!this.archivoSubir && this.identidad.imagen == ''){
            swal("Oye!!", `No ingresaste ninguna imagen`, "info");
            //alert('No hay ninguna img')
          }else{
            //alert(`tu imagen es ${this.archivoSubir.name}`);
              this.usuarioService.cargarImagenUsuario(this.archivoSubir, this.usuarioActualizar._id)
              .subscribe((result: any)=>{
                  this.usuarioActualizar.imagen = result.imagen;
                  localStorage.setItem('sesion', JSON.stringify(this.usuarioActualizar));

                  //Mostrar la Imagen
                  let rutaImagen = this.url+'obtener-imagen-usuario/'+this.usuarioActualizar.imagen;
                  document.getElementById('mostrarImagen').setAttribute('src', rutaImagen);
                  document.getElementById('imgUsuario').setAttribute('src', rutaImagen);
              })
          }


          //////////////////////////////////////////////////////////////
        }else{
          // this.actualizacionCorrecta = "No se han podido actualizar sus datos, comuniquese con el administrador de la aplicacion";
          alert(`No fue posible actualizar tus datos`)
        }
      },error=>{
        if (error != null) {
          console.log(error)
        }
      }
    )
  }

  cerrarSesion(){
    this.identidad = this.usuarioService.obtenerNombreUsuario();
    
    swal(`vuelve pronto ${this.identidad.nombre}!!`);
    this._router.navigate(['/main']);
    localStorage.removeItem('sesion');
    localStorage.clear();
    this.identidad = null;
  }

}