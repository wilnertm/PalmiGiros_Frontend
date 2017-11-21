(function() {
    'use strict';

    angular.module('palmiGirosApp')
      .config(config);

    config.inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('usuarios-create', {
                url: '/usuarios-create',
                template: '<usuarios-create></usuarios-create>'
              })
            .state('usuarios-list',{
                url:'/usuarios-list',
                template: '<usuarios-list></usuarios-list>'
            })

    }

})();
