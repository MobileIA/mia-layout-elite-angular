import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@mobileia/authentication';

@Component({
  selector: 'mia-layout-elite-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  /**
   * Almacena la ruta cuando se loguea correctamente
   */
  private routeSuccess : String;

  loginForm: FormGroup;

  constructor(private authService : AuthenticationService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router) {
      this.buildForm();
     }

  ngOnInit() {
    // Guardar parametros enviados
    this.route.data.subscribe(params => {
      this.routeSuccess = params.success_route;
    });
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }

  submit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.requestLogin(email, password);
  }

  requestLogin(email : string, password : string) {
    this.authService.signInWithEmailAndPassword(email, password, data => {
      console.log(data);
      if(data.success){
        console.log("llego");
        this.router.navigateByUrl('/' + this.routeSuccess);
      }

    });
  }
}
