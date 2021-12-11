import {UserLogin} from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/UserModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoalthiago.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('https://blogpessoalthiago.herokuapp.com/usuarios/cadastrar', usuario)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
