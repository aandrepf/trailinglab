import { Injectable } from '@angular/core'
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserTrader } from "./acesso/usuario.model";
import { ToastrService } from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
    constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) {}

    public userSubscription(key: string): Promise<any> {
      const url = "http://mynetsurvey.com/api/auth/Subscription?key="+key;
      return this.http.get(url).toPromise()
      .then((res: UserTrader) => {
          return res;
      })
      .catch((error) => {
          console.log('Erro subscription', error);
      });
    }

    public resendToken(key: string): Promise<any> {
      const url = "http://mynetsurvey.com/api/auth/ReSendToken?key="+key;
      return this.http.get(url).toPromise()
      .then((res: UserTrader) => {
          return res;
      })
      .catch((error) => {
          console.log('Erro resend', error);
      });
    }

    public passwordRecovery(email: string): Promise<any> {
      const url = "http://mynetsurvey.com/api/auth/PasswordRecovery?email="+email;
      return this.http.get(url).toPromise()
      .then((res: UserTrader) => {
          return res;
      })
      .catch((error) => {
          console.log('Erro password recovery', error);
      });
    }

    public emailPasswordChange(key: string): Promise<any> {
      const url = "http://mynetsurvey.com/api/auth/EmailPasswordChange?key="+key;
      return this.http.get(url).toPromise()
      .then((res: UserTrader) => {
          return res;
      })
      .catch((error) => {
          console.log('Erro email password change', error);
      });
    }

    public updatePassword(key: string, password: string): Promise<any> {
      const url = "http://mynetsurvey.com/api/auth/UpdatePassword";
    const body = JSON.stringify({ConsumerKey: key, Password: password});
    return this.http.post(url, body, httpOptions).toPromise()
      .then((res: UserTrader) => {
        return res;
      })
      .catch((error: any) => {
        console.log('ERRO UPDATE', error);
      });
    }
}
