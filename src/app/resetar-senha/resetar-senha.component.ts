import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resetar-senha',
  templateUrl: './resetar-senha.component.html',
  styleUrls: ['./resetar-senha.component.css']
})
export class ResetarSenhaComponent implements OnInit {
  public confirmed: boolean;
  public key: string;
  public msg: string;
  public code: number;

  constructor(private router: Router, private _route: ActivatedRoute, private _user: UserService,
    private toastr: ToastrService) {
    this.key = this._route.snapshot.queryParams['key'];
    // this.validarKey(this.key);
  }

  ngOnInit() {
  }

  public resetar(): void {
    // this._auth.autenticar(this.formulario.value.email, this.formulario.value.senha);
  }

  public voltaLogin(): void{
    this.router.navigate(['/']);
  }
}
