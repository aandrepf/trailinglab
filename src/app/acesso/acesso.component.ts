import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {
  public cadastro: boolean = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {}

  public exibirPainel(event: any): void {
    this.cadastro = event.local === 'cadastro' ? true : false;
    if (event.message !== null) {
      this.toastr.success(event.message, 'Seja bem vindo');
    }
  }

}
