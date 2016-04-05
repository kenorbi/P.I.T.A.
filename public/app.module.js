
var pita = angular.module('Pita', ['ngRoute']);

pita.config(function($locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

});