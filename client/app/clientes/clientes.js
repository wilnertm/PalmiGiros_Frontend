(function() {
    'use strict';

    angular.module('palmiGirosApp')
      .config(config);

    config.inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('clientes-create', {
                url: '/clientes-create',
                template: '<clientes-create></clientes-create>'
              })
            .state('clientes-list',{
                url:'/clientes-list',
                template: '<clientes-list></clientes-list>'
            })

    }

})();
