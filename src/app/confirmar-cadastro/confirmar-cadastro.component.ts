import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { UserTrader } from '../acesso/usuario.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirmar-cadastro',
  templateUrl: './confirmar-cadastro.component.html',
  styleUrls: ['./confirmar-cadastro.component.css']
})
export class ConfirmarCadastroComponent implements OnInit {
  public confirmed: boolean;
  public key: string;
  public msg: string;
  public code: number;

  constructor(private router: Router, private _route: ActivatedRoute, private _user: UserService,
    private toastr: ToastrService) {
    this.key = this._route.snapshot.queryParams['key'];
    this.validarKey(this.key);
  }

  ngOnInit() {
    
  }

  public validarKey(chave: string): void {
    this._user.userSubscription(chave)
    .then((retorno: UserTrader) => {
      console.log('ret subs:', retorno);
      if (retorno.retCode !== 0) {
        this.confirmed = false;  
      } else {
        this.confirmed = true;
      }
      this.code = retorno.retCode;
      this.msg = retorno.retMsg;
    })
    .catch(() => {
      this.msg = 'Ocorreu algum erro ao tentar ativar contas!'
      throw this.msg;
    })
  }

  public voltarLogin(): void {
    this.router.navigate(['/']);
  }

  public reenviarConfirmacao(): void {
    this._user.resendToken(this.key)
    .then((resend: UserTrader) => {
      if (resend.retCode !== 0) {
        this.toastr.error(resend.retMsg, 'Ops!');
      } else {
        this.toastr.success(resend.retMsg, 'Reativação de Token');
      }
      this.router.navigate(['/']);
    });
  }

}
