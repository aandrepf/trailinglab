import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AutenticacaoGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { ConfirmarCadastroComponent } from './confirmar-cadastro/confirmar-cadastro.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { ResetarSenhaComponent } from './resetar-senha/resetar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    ConfirmarCadastroComponent,
    EsqueciSenhaComponent,
    ResetarSenhaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-full-width',
      preventDuplicates: true
    })
  ],
  providers: [AutenticacaoGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
