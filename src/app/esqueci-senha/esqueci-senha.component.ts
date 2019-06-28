import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserTrader } from '../acesso/usuario.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required)
  });

  constructor(private _user: UserService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  public resetar(): void {
    // this._auth.autenticar(this.formulario.value.email, this.formulario.value.senha);
    let recoverMsg: string;
    let code: number;
    this._user.passwordRecovery(this.formulario.value.email)
    .then((retorno: UserTrader) => {
      console.log('recover', retorno);
      recoverMsg = retorno.retMsg;
      code = retorno.retCode;
    })
    .catch(() => void(0))
    .finally(() => {
      if (code !== 0) {
        this.toastr.error(recoverMsg, 'Ops!');
      } else {
        this.toastr.success(recoverMsg, 'Resetar senha');
      }
      this.formulario.reset();
    })
  }

  public voltaLogin(): void{
    this.route.navigate(['/']);
  }

}
