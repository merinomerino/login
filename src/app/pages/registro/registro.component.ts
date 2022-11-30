import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario!:UsuarioModel ;

  constructor(private auth:AuthService) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
    this.usuario.email='oammerino@gmail.com';
  }

  onSubmit( form : NgForm ){
    if(form.invalid){ return }
    // console.log('Formulario enviado')
    // console.table(this.usuario);
    // console.log(form)
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor',
      showConfirmButton:false,
    })
    Swal.showLoading(Swal.getDenyButton());


    this.auth.nuevoUsuario(this.usuario)
     .subscribe(resp=>{
      console.log(resp)
      Swal.close();
     },(err)=>{
      console.log(err.error.error.message)
      Swal.fire({
        icon:'error',
        title:'Error al Autentificar',
        text:err.error.error.message
      })
    })
  }


}
