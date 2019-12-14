# Apotek Hexa Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Development server

Run `docker-compose up` for a dev server. Navigate to `http://localhost/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `./ng.sh g component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `./ng.sh build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `./ng.sh test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `./ng.sh e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code Generator

we're using angular-cli to generate skeleton code. please take a look full references here [angular-cli](https://github.com/angular/angular-cli).

| Scaffold | Usage |
| --- | --- |
| [Component](https://github.com/angular/angular-cli/wiki/generate-component) | `./ng.sh component my-new-component` |
| [Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `./ng.sh directive my-new-directive` |
| [Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe) | `./ng.sh pipe my-new-pipe` |
| [Service](https://github.com/angular/angular-cli/wiki/generate-service) | `./ng.sh service my-new-service` |
| [Class](https://github.com/angular/angular-cli/wiki/generate-class) | `./ng.sh class my-new-class` |
| [Guard](https://github.com/angular/angular-cli/wiki/generate-guard) | `./ng.sh guard my-new-guard` |
| [Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `./ng.sh interface my-new-interface` |
| [Enum](https://github.com/angular/angular-cli/wiki/generate-enum) | `./ng.sh enum my-new-enum` |
| [Module](https://github.com/angular/angular-cli/wiki/generate-module) | `./ng.sh module my-module` |

angular-cli will add reference to `components`, `directives` and `pipes` automatically in the `app.module.ts`. If you need to add this references to another custom module, follow this steps:

1.  `./ng.sh module new-module` to create a new module
2.  call `./ng.sh component new-module/new-component`

This should add the new `component`, `directive` or `pipe` reference to the `new-module` you've created.

## Further help

To get more help on the Angular CLI use `./ng.sh help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
