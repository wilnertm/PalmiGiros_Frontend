(function(){
	'use strict';

	class ClientesCreateComponent{
		constructor( usuariosService,ciudadesService,clientesService){
			this.usuariosService = usuariosService;
			this.ciudadesService = ciudadesService;
			this.clientesService = clientesService;


		}

		$onInit(){
				this.ciudadesService.query().$promise
				.then(response => {
					this.ciudades = response;
					console.log(this.ciudades);
				})
				.catch(err => console.log("ERROR"));


		}


		crearCliente(){
			this.clientesService.save(this.clientes).$promise
			.then(response => {
				alert('Registro Exitoso');
				this.clientes = response;
			})
			.catch(err => console.log("ERROR",err));
		}




		}

ClientesCreateComponent.$inject=['usuariosService','ciudadesService','clientesService'];
angular.module('palmiGirosApp')
	.component('clientesCreate',{
		templateUrl:"app/clientes/clientes-create/clientes-create.html",
		controller:ClientesCreateComponent,
		controllerAs:'vm'
	});

})();
