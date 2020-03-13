# Angular 8, NgRx and Angular Material Starter

## Useful Commands

- `npm start` - starts a dev server and opens browser with running app
- `npm run start:prod` - runs full prod build and serves prod bundle
- `npm run test` - runs lint and tests
- `npm run watch` - runs tests in watch mode
- `npm run prettier` - runs prettier to format whole code base (`.ts` and `.scss`)
- `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application)

## Learning Materials

Articles with content that explains various approaches used to build this starter project.

- [Blog post about Best subscribing to RxJS Observable data by Components](https://medium.com/@tomastrajan/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794): subscribe() vs | async pipe
- [Blog post about Best Practices for Angular CLI](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81) used in this starter project
- [Blog post about Typescript tips for Ngrx reducer code](https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0)
- [Blog post about building responsive layouts with Bootstrap 4 in Angular apps](https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b)
- [Blog post about configuration of animations during runtime](https://medium.com/tomastrajan/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a)
- [Blog post about unit testing of components with NgRx TestStore](https://medium.com/@tomastrajan/how-to-unit-test-angular-components-with-fake-ngrx-teststore-f0500cc5fc26)
- [Blog post about Angular CLI budgets](https://medium.com/@tomastrajan/how-did-angular-cli-budgets-save-my-day-and-how-they-can-save-yours-300d534aae7a)
- [Blog post about the best way to unsubscribe RxJs streams](https://medium.com/@tomastrajan/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0)
- [Blog post about Angular 6+ DI with providedIn](https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f)
- [Blog post about the best way to lazy load Angular Elements](https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007)

## Features

- custom themes support (4 themes included)
- lazy-loading of feature modules
- lazy reducers
- localStorage ui state persistence
- `@ngrx/effects` for API requests
- fully responsive design
- angular-material and custom components in `SharedModule`

## Stack

- Angular
- ngrx (or try [ngx-model](https://github.com/tomastrajan/ngx-model) if you prefer less boilerplate)
- Angular Material
- Bootstrap 4 (only reset, utils and grids)

## Troubleshooting

- **Blocking at emitting LicenseWebpackPlugin when npm start** - try using [cnpm](https://github.com/cnpm/cnpm) instead of npm

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
