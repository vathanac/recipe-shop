import { Subscription } from 'rxjs';
import { AlertComponent } from './../shared/alert/alert.component';
import { PlaceholderDirective } from './../shared/placeholder/placeholder.directive';
import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService, AuthData } from './auth.service';
import { AppComponent } from './../app.component';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {
  isLogin = false;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;
  closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private comoponentFactoryResovler: ComponentFactoryResolver
  ) {}
  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthData>;

    if (this.isLogin) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    // const alertCmp = new AlertComponent();
    const alertCmp =
      this.comoponentFactoryResovler.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componetRef = hostViewContainerRef.createComponent(alertCmp);

    componetRef.instance.message = message;
    this.closeSub = componetRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe(), hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
