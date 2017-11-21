(function () {
  'use strict';
  angular.module('palmiGirosApp')
  .factory('girosService', girosService);
  girosService.inject =["$resource","API"];
  function girosService($resource, API) {
    return $resource(API+"/api/giros/:id",{
      id:'@id'

    },{
      encontrarGiro:{
        url:API+'/api/giros/findGiro',
        method:'GET',
        isArray:true
      },
      update:{
        method:'PUT'
      }


    });



  }
})();
