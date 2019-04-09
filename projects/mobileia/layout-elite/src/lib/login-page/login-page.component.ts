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
  private routeSuccess: String;
  /**
   * Determinar si en el ingreso debe validar el Rol del usuario.
   */
  private verifyRole = false;
  /**
   * Rol que tiene permisos para ingresar
   */
  private withRole = 0;

  loginForm: FormGroup;
  loginMessageError = '';

  /** Variables para personalizar el diseño */
  designImageBackground = '';
  designImageLogo = '';
  designTitle = 'Ingresar';
  designBtnColorClass = 'btn-info';

  constructor(private authService: AuthenticationService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
      this.buildForm();
     }

  ngOnInit() {
    // Guardar parametros enviados
    this.route.data.subscribe(params => {
      this.routeSuccess = params.success_route;
      if (params.verify_role) {
        this.verifyRole = params.verify_role;
        this.withRole = params.with_role;
      }
      // Procesar variables del diseño
      this.processCustomDesign(params);
    });

    this.route.queryParams.subscribe(params => {
      const redirect = params.redirect;
      if (redirect !== '/' && redirect !== '' && redirect !== null 
      && redirect !== undefined && redirect !== '%2F' && redirect !== '/login;redirect=%2F') {
        this.routeSuccess = redirect;
      }

      this.observableLogged();
    });

  }

  observableLogged() {
    this.authService.isLoggedBehavior().subscribe(logged => {
      if (logged) {
        this.router.navigateByUrl('/' + this.routeSuccess + '');
      }
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

  requestLogin(email: string, password: string) {
    // Limpiar mensaje de error
    this.loginMessageError = '';
    this.authService.signInWithEmailAndPassword(email, password, data => {
      if (data.success) {

        if (this.isValidRole(data.response.role)) {
          this.router.navigateByUrl('/' + this.routeSuccess);
        } else {
          this.loginMessageError = 'Usted no tiene permisos para registrarse';
          this.authService.signOut();
        }

      } else {
        this.loginMessageError = data.error.message;
      }
    });
  }
  /**
   * Funcion que determinar si el usuario para ingresar necesita un rol especial
   */
  isValidRole(userRole: number): Boolean {
    // Si no necesita verificar rol
    if (!this.verifyRole) {
      return true;
    }
    // Verificar si es el mismo rol
    if (this.withRole == userRole) {
      return true;
    }
    return false;
  }

  processCustomDesign(params) {
    if (params.image_background) {
      this.designImageBackground = params.image_background;
    }
    if (params.image_logo) {
      this.designImageLogo = params.image_logo;
    }
    if (params.title_box) {
      this.designTitle = params.title_box;
    }
    if (params.button_color) {
      this.designBtnColorClass = params.button_color;
    }
  }
}
