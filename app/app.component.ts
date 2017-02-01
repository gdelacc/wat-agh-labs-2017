// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/home.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { 
    public app_title = 'WAT LABS 2016-17 - Notes Manager App';
    public description = 'Example SPA of a Notes Manager based on NodeJS, MongoDB & AngularJS';
}