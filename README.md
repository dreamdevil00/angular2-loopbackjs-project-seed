## About

This is a project seed for an API with an Admin interface that can be easily
extended and built upon,  borrowed from [Colmena](https://github.com/colmena/colmena)
but only reserves code structure and basic configuration to make it clean.

## Introduction
It is built using a collection of great Open Source projects, including but not limited to:
- [LoopBack](http://loopback.io) - API server based on Express.
- [Angular](http://www.angular.cn) - MVC framework to build web apps.
- [LoopBack SDK Builder](https://www.npmjs.com/package/@mean-expert/loopback-sdk-builder) - Awesome integration of Loopback and Angular.
- [CoreUI](http://coreui.io/) - Amazing Bootstrap Admin Template.

## Structure
The project is a mono-repo managed by [lerna](https://lernajs.io/).  It is structured like this:
- ```apps/```
  - ```admin``` The Admin interface built with Angular.
  - ```api``` The REST API built with LoopBack.
- ```modules```
  - ```admin```
    - ```*``` Modules that add functionality to the Admin app.
  - ```api```
    - ```*``` Modules that add functionality to the API app.
- ```packages```
  - ```admin-*``` Packages used by the Admin app.
  - ```api-*``` Packages used by the API app.

## Installation
### Requirements
- ```node```(v6.9.x or higher)
- ```npm``` (v3.x or higher)

Globally installed Node packages:
- [Angular CLI](https://github.com/angular/angular-cli)
- [Lerna](https://lernajs.io/)
- [LoopBack CLI](https://github.com/strongloop/loopback-cli)

``` npm install -g @angular/cli lerna loopback-cli ```

### setup
Clone the repository and install the dependencies:
```
git clone https://github.com/dreamdevil00/angular2-loopbackjs-project-seed.git
cd angular2-loopbackjs-project-seed
npm install
```