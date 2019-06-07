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

## Como usar Layout:
1. Generar componente:
```js
export class AppComponent {
  title = 'app';
  isLogged = false;

  topbarMenu = [{
    id: 1,
    title: 'Mi perfil',
    icon: ''
  },
  {
    id: 2,
    title: 'Ejemplo 2',
    icon: ''
  },
  {
    separator: true
  },
  {
    id: 3,
    title: 'Mi perfil',
    icon: 'fa fa-user'
  },
  {
    separator: true
  },
  {
    id: 4,
    title: 'Salir',
    icon: 'fa fa-power-off'
  }];

  sidebarMenu = [
    {
      is_group: true,
      title: '--- MENU PRINCIPAL'
    },
    {
    id: 1,
    title: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    is_active: false
  },
  {
    id: 2,
    title: 'Ejemplo',
    icon: 'fas fa-tachometer-alt',
    budge: '4'
  }
];

  constructor(private authService : AuthenticationService,
    private router: Router,
  private menuService : LayoutMenuService) { 

      this.authService.isLoggedBehavior().subscribe(logged => {
        this.isLogged = logged;
      });

      this.menuService.getSidebarMenuObservable().subscribe(id => {
        this.clickSidebarMenu(id);
      });

      this.menuService.getTopbarMenuObservable().subscribe(id => {
        this.clickTopbarMenu(id);
      });
    }

  public clickTopbarMenu(id : number){
    console.log("Topbar menu: " + id);
    if(id == 4){
      this.logout();
    }
  }

  public clickSidebarMenu(id: number){
    console.log("Sidebar Menu: " + id);
  }

  /**
   * logout
   */
  public logout() {
    this.authService.signOut();
    this.router.navigate(['/login']); 
    this.isLogged = false; 
  }
}
```
2. Agregar HTML:
```html
<mia-layout-elite [isLogged]="isLogged" [topbarMenu]="topbarMenu" [sidebarMenu]="sidebarMenu" [logoText]="'assets/images/logo/eliteadmin-small-text.png'" [logoTextDark]="'assets/images/logo/logo-text.png'" [logoIcon]="'assets/images/logo/logo-light-icon.png'"
    [logoIconDark]="'assets/images/logo/logo-icon.png'"></mia-layout-elite>
```


## Como usar Tablas con filtros:
1. Generar componente:
```js
columnTable = [
    { title: 'ID', filter: 'id', class: 'text-nowrap'},
    { title: 'Titulo', filter: 'title' },
    { title: 'Estado', filter: 'status' },
    { title: 'Acciones', class: 'text-nowrap' }
  ];
  tableModel = new MIATableModel();
  dataItems = new ApiPagination<Category>();

  constructor(
    private tableService: LayoutTableService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    // Observar cuando se cambian los filtros
    this.tableService.getFilterObservable().subscribe(filter => {
      this.onChangeFilter(filter);
    });
  }

  loadItems() {
    this.categoryService.fetchList(this.tableModel).subscribe(data => {
      this.tableModel.setPagination(data.response.last_page, 10);
      this.dataItems = data.response;
    });
  }

  onChangeFilter(newFilter){
    // Verificar si se seleccinoo un filtro correcto
    if (newFilter.title == '' || newFilter.title == undefined) {
      return;
    }
    // Asignamos nuevo filtro
    this.tableModel.ordType.title = newFilter.title;
    this.tableModel.ordType.asc = newFilter.asc;
    // Reiniciar paginas
    this.tableModel.pageCurrent = 1;
    // Volver a cargar los eventos
    this.loadItems();
  }

  onClickPage(page: number) {
    this.tableModel.pageCurrent = page;
    this.loadItems();
  }
```
2. Generar HTML:
```html
<mia-layout-elite-page-header [title]="'Categorias'"></mia-layout-elite-page-header>

<div class="col-12">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Listado de Categorias</h4>
            <h6 class="card-subtitle">Administra todas las categorias aqui:</h6>
            <div class="table-responsive">
                <mia-layout-elite-table [th]="columnTable">
                    <tbody *ngIf="isLoading">
                        <tr>
                            <td colspan="8" class="text-center"> <i class="fa fa-spinner"></i> Cargando...</td>
                        </tr>
                    </tbody>
                    <tbody *ngIf="!isLoading">
                        <tr *ngFor="let item of dataItems.data">
                            <td>{{ item.num }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.firstname }}</td>
                            <td>{{ item.lastname }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.amount }}</td>
                            <td>{{ item.discount }}%</td>
                            <td class="text-nowrap">

                            </td>
                        </tr>
                    </tbody>
                </mia-layout-elite-table>
            </div>
            <ngb-pagination class="pagination justify-content-end" [collectionSize]="tableModel.lastPage * tableModel.itemPerPage" [(page)]="tableModel.pageCurrent" [maxSize]="5" [rotate]="true" [boundaryLinks]="true" (pageChange)="onClickPage($event)"></ngb-pagination>
        </div>
    </div>
</div>
```



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
