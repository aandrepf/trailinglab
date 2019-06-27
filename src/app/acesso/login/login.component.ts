import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from  './../../auth.service';
import { UserTrader } from '../usuario.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() public exibirPainel: EventEmitter<any> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'senha': new FormControl(null, Validators.required)
  });

  constructor(private _auth: AuthService, private route: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit({local: 'cadastro', message: null});
  }

  public autenticar(): void {
    this._auth.autenticar(this.formulario.value.email, this.formulario.value.senha)
    .then((retorno: UserTrader) => {
      console.log('login retorno', retorno);
      if (retorno.retCode !== 0) {
        this.toastr.error(retorno.retMsg, 'Ops!');
      }
      this.formulario.reset();
    });
  }

  public irReset(): void {
    this.route.navigate(['/forgot-password']);
  }

}
