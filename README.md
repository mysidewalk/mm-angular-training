## Overview

This project is meant to be a guide to learning beginner to intermediate level angularjs concepts. Similar to the [PhoneCat Tutorial App](https://docs.angularjs.org/tutorial) ([Repo](https://github.com/angular/angular-phonecat)), lessons are based off tagged commits. 

## Prerequisites
- [git](http://git-scm.com/)
- [Bower](http://bower.io/)
- python

## Get Started
- `git clone https://github.com/rachelhathaway/mm-angular-training.git`
- `cd mm-angular-training`
- `bower install`
- `python -m SimpleHTTPServer`

## Steps
Checkout a step with `git checkout xx` where `xx` is the step number.

### 00 - Modules
1. Declare app, controllers, services, filters, and directives modules.

### 01 - DI + simple routing and views
1. Add angular-route.js to the project. Inject it into the app.
2. Add the config() method to the main app.
3. Inject $locationProvider and $routeProvider into the config method.
4. Using $locationProvider, enable html5Mode.
5. Using $routeProvider, add your first route. Set the templateUrl to views/index.html.