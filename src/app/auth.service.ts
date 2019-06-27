import { Injectable } from '@angular/core'
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserTrader } from "./acesso/usuario.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AuthService {
  public token_id: string;

  constructor(private router: Router, private http: HttpClient) {}

  public cadastrarUsuario(usuario: UserTrader): Promise<any> {
    const url = "http://mynetsurvey.com/api/auth/SignUp";
    const body = JSON.stringify(usuario);
    console.log('dados cadastro', body);
    return this.http.post(url, body, httpOptions).toPromise()
      .then((res: UserTrader) => {
        return res;
      })
      .catch((error: Error) => {
        throw new Error('error');
      });
  }
  
  public autenticar(email: string, senha: string) {
    const url = "http://mynetsurvey.com/api/auth/SignIn";
    const body = JSON.stringify({Email: email, Password: senha});
    return this.http.post(url, body, httpOptions).toPromise()
      .then((res: UserTrader) => {
        if (res.retCode === 0) {
          this.token_id = res.consumerKey;
          localStorage.setItem('token', res.consumerKey);
          this.router.navigate(['/home']);
        }
        return res;
      })
      .catch((error: Error) => {
        console.log('ERRO AUTENTICA', error);
      });
  }

  public autenticado(): boolean {
    if (this.token_id === undefined && localStorage.getItem('token') !== null) {
      this.token_id = localStorage.getItem('token');
    }
    return this.token_id !== undefined;
  }

  public sair() {
    localStorage.removeItem('token');
    this.token_id = undefined;
    this.router.navigate(['/']);
  }
}
