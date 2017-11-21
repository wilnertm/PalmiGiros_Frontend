(function(){
	'use strict';

	class ClientesListComponent{
		constructor(clientesService){
			this.clientesService = clientesService;


	}

	$onInit(){
		this.clientesService.query().$promise
		.then(response =>{
			this.clientes = response;
			console.log("CLIENTES",response);
		})
	}
}



ClientesListComponent.$inject=['clientesService'];
angular.module('palmiGirosApp')
	.component('clientesList',{
		templateUrl:"app/clientes/clientes-list/clientes-list.html",
		controller:ClientesListComponent,
		controllerAs:'vm'
	});

})();
