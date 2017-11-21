(function(){
	'use strict';

	class UsuariosCreateComponent{
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


		crearUsuario(){
			this.usuariosService.crearEmpleado(this.usuarios).$promise
			.then(response => {
				alert('Registro Exitoso');
				this.usuarios = response;
			})
			.catch(err => console.log("ERROR",err));
		}




		}

UsuariosCreateComponent.$inject=['usuariosService','ciudadesService','clientesService'];
angular.module('palmiGirosApp')
	.component('usuariosCreate',{
		templateUrl:"app/usuarios/usuarios-create/usuarios-create.html",
		controller:UsuariosCreateComponent,
		controllerAs:'vm'
	});

})();
