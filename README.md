# MiaLayoutElite
Libreria para utilizar facilmente el Template EliteAdmin.

## Como instalar
1. Instalar libreria en el proyecto:
```bash
npm install @ng-bootstrap/ng-bootstrap --save
npm install @mobileia/layout-elite --save
```
2. Importar modulo:
```js
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutEliteModule } from '@mobileia/layout-elite';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    LayoutEliteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
3. Incluir para que procese los SCSS:
```json
"schematics": {
    "@schematics/angular:component": {
        "styleext": "scss"
    }
},
```
4. Agregar Assets, abrir archivo: angular.json:
```js
 "styles": [
    "node_modules/@mobileia/layout-elite/assets/bootstrap-4.1.1-dist/css/bootstrap.min.css",
    "node_modules/@mobileia/layout-elite/assets/template-elite/scss/style.scss",
    "src/styles.css"
],
```
5. Agregar clase al body para activar el template:
```html
<body class="skin-default fixed-layout">
  ...
</body>
```

## Como usar pantalla de login:
1. Agregar registro al Route:
```js
{ 
    path: 'login', 
    component: LoginPageComponent,
    data: {"success_route" : "index"}
  },
```
2. Reemplazar la variable "success_route", por la ruta a donde desea que se rediriga una vez logueado correctamente.








This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
