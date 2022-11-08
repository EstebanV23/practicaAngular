# AprendiendoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Notes

## My first project

* Install  `npm install -g @angular/cli`
* Verify version of the Angular CLI `ng --version | version | -v`
* Create a new project `ng new project_name`
* Enter the project name with `cd project_name`
* Execute `ng serve` for run the server
* if you have some problems, check the npm version with `npm --version | version | -v` and check the node version with `node --version | version | -v`

## Connections between components and views

For you to connect components you have to make it through `templateUrl` into the component.

If you like to use a component that you created, you could make it with `{{  }}` into the HTML file

## Module 

The modules are used for to render components into the general document, here are saved for after use them in the differents HTML view

The modules allow us to import components in any view from the general document, maybe  into the HTML file or one component specific

For used it, we will use like:
```javascript
@NgModule({
//Important
  declarations: [
    AppComponent
  ],
//Important
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Create a new component

We create a new file with the extension name_component`.comoponent.ts`

