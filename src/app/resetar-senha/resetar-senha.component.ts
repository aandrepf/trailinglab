import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { UserTrader } from '../acesso/usuario.model';

@Component({
  selector: 'app-resetar-senha',
  templateUrl: './resetar-senha.component.html',
  styleUrls: ['./resetar-senha.component.css']
})
export class ResetarSenhaComponent implements OnInit {
  public confirmed: boolean;
  public key: string;

  public formulario: FormGroup = new FormGroup({
    'senha': new FormControl(null, Validators.required),
    'senhaconfirm': new FormControl(null, Validators.required)
  });

  constructor(private router: Router, private _route: ActivatedRoute, private _user: UserService,
    private toastr: ToastrService) {
    this.key = this._route.snapshot.queryParams['key'];
    this.confirmed = this.key ? true : false;
    // this.getUserInfo(this.key);
  }

  ngOnInit() {
  }

  public resetar(): void {
    if (this.formulario.value.senha !== this.formulario.value.senhaconfirm) {
      this.toastr.error('Senhas não conferem', 'Ops!');
    } else {
      this._user.updatePassword(this.key, this.formulario.value.senha)
      .then((retorno: UserTrader) => {
        console.log('update', retorno);
        if (retorno.retCode !== 0) {
          this.toastr.error(retorno.retMsg, 'Ops!');
        } else {
          this.toastr.success(retorno.retMsg, 'Resetar senha');
        }
      })
      .catch(() => {
        this.toastr.error('Ocorreu algum erro inesperado ao processar sua requisição. Tente novamente mais tarde!', 'Erro de sistema!');
      })
    }
    this.formulario.reset();
  }

  public voltaLogin(): void{
    this.router.navigate(['/']);
  }

  public getUserInfo(chave: string) {
    let recoverMsg: string;
    let code: number;
    this._user.emailPasswordChange(chave)
    .then((retorno: UserTrader) => {
      console.log('recover', retorno);
      // recoverMsg = retorno.retMsg;
      // code = retorno.retCode;
    })
    .catch(() => void(0))
    .finally(() => {
      /*if (code !== 0) {
        this.toastr.error(recoverMsg, 'Ops!');
      } else {
        this.toastr.success(recoverMsg, 'Resetar senha');
      }
      // this.formulario.reset();*/
    })
  }
}
