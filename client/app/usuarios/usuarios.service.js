(function () {
  'use strict';
  angular.module('palmiGirosApp')
  .factory('usuariosService', usuariosService);
  usuariosService.inject =["$resource","API"];
  function usuariosService($resource, API) {
    return $resource(API+"/api/usuarios/:id",{
      id:'@id'

    },{

      update:{
        method:'PUT'
      },
      crearEmpleado:{
        url:API+'/api/usuarios/empleados',
        method:'POST'
      }


    });



  }
})();
