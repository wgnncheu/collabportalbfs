angular.module('app').controller('app', app);
function app($scope, app) {
    'use strict';

    $scope.logout = function() {
        if (typeof cordova !== 'undefined' && window.plugins && window.plugins.touchid) {
            window.plugins.touchid.has('credentials', function() {
                window.plugins.touchid.delete('credentials');
                app.logout();
            }, function() {
                app.logout();
            });
        } else {
            app.logout();
        }
    };
}
