(function () {
  'use strict';
  angular.module('palmiGirosApp')
  .factory('clientesService', clientesService);
  clientesService.inject =["$resource","API"];
  function clientesService($resource, API) {
    return $resource(API+"/api/clientes/:id",{
      id:'@id'

    },{
      encontrarCliente:{
        url:API+'/api/clientes/find',
        method:'GET',
      },
      // guardarCliente:{
      //   url:API+'/api/clientes',
      //   method:'POST',
      //
      // }


    });



  }
})();
