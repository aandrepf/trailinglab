import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../auth.service';
import { UserTrader } from './../usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() public exibirPainel: EventEmitter<{}> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'nome_completo': new FormControl(null, Validators.required),
    'senha': new FormControl(null, Validators.required)
  })

  constructor(private _auth: AuthService, private toastr: ToastrService) {}

  ngOnInit() {}

  public exibirPainelLogin(): void {
    this.exibirPainel.emit({local: 'login', message: null});
  }

  public cadastrarUsuario(): void {
    let usuario: UserTrader = new UserTrader();
    usuario.email = this.formulario.value.email;
    usuario.name = this.formulario.value.nome_completo;
    usuario.password = this.formulario.value.senha;

    this._auth.cadastrarUsuario(usuario)
      .then((dados: UserTrader) => { 
        console.log('cadastro', dados);
        if (dados.retCode === 0) {
          this.exibirPainel.emit({local: 'login', message: dados.retMsg});
        } else {
          this.toastr.error(dados.retMsg, 'Ops!');
        }
        this.formulario.reset();
      });
  }

}
