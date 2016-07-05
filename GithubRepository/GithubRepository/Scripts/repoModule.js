"use strict";

var repoModule = angular.module("repoModule", ["ngRoute","ui.bootstrap"]);

repoModule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

}]);

// register custom filters
repoModule.filter("showBoolean", showBoolean);


// register services
repoModule.service("repoSrv", repoSrv);


// register controllers
repoModule.controller("repoCtrl", repoCtrl);
repoModule.controller("repoCommitCtrl", repoCommitCtrl);