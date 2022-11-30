import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url='https://identitytoolkit.googleapis.com/v1/accounts:'
  private apikey='AIzaSyCeTOf4G3K6UF4lh4_8ZOBiK9nFc00iYdk';
  //crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }

  login(usuario:UsuarioModel){

  }

  logout(){

  }

  nuevoUsuario(usuario:UsuarioModel){
    const authData={
      ...usuario,
      returnSecureToken:true,
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apikey}`,
      authData
    )

  }
}
