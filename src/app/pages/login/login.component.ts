import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel = new UsuarioModel();

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm){
    if(form.invalid){return};
    // console.log(this.usuario)
    // console.log(form)
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor',
      showConfirmButton:false,
    })
    Swal.showLoading(Swal.getDenyButton());

    this.auth.login(this.usuario)
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
