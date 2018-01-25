angular.module('app').controller('app_menu', app_menu);
function app_menu($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.logout = function() {
        if (typeof cordova !== 'undefined' && window.plugins && window.plugins.touchid) {
            window.plugins.touchid.has('credentials', function() {
                window.plugins.touchid.delete('credentials')
                app.logout();
            }, function() {
                app.logout();
            });
        } else {
            app.logout();
        }
    };
}