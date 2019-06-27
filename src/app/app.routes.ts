import { Routes } from '@angular/router';
import { AutenticacaoGuard } from './auth-guard.service';

import { AcessoComponent } from './acesso/acesso.component';
import { HomeComponent } from './home/home.component';
import { ConfirmarCadastroComponent } from './confirmar-cadastro/confirmar-cadastro.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { ResetarSenhaComponent } from './resetar-senha/resetar-senha.component';

export const ROUTES: Routes = [
  { path: '', component: AcessoComponent },
  { path: 'home', component: HomeComponent, canActivate: [AutenticacaoGuard] },
  { path: 'subscription', component: ConfirmarCadastroComponent },
  { path: 'forgot-password', component: EsqueciSenhaComponent},
  { path: 'reset-password', component: ResetarSenhaComponent}
];
