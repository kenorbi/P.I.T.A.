/**
 * Created by razvi on 05/04/16.
 */

angular.module('Pita')
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'components/home/homeView.html',
                controller: 'homeController'
            })
            .when('/login', {
                templateUrl: 'components/signIn/signInView.html',
                controller: 'signInController'
            });

    }]);