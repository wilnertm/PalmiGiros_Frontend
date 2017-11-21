(function(){
	'use strict';

	class GirosCreateComponent{
		constructor( girosService,ciudadesService,clientesService,$state){
			this.girosService = girosService;
			this.ciudadesService = ciudadesService;
			this.clientesService = clientesService;
			this.$state = $state;
			this.giros = {
				idClienteEmisor:{
					id: null
				},
				idClienteReceptor:{
					id: null
				}
			}

		}

		$onInit(){
				this.ciudadesService.query().$promise
				.then(response => {
					this.ciudades = response;
					console.log(this.ciudades);
				})
				.catch(err => console.log("ERROR"));


		}
		encontrarEmisor(){
			this.clientesService.encontrarCliente({documento:this.documentoEmisor}).$promise
			.then(response => {
				console.log("EMISOR",response);
				this.clienteEmisor = response;
				this.giros.idClienteEmisor.id = response.id;
			})
		}

		encontrarReceptor(){
			this.clientesService.encontrarCliente({documento:this.documentoReceptor}).$promise
			.then(response => {
				console.log("RECEPTOR",response);
				this.clienteReceptor = response;
				this.giros.idClienteReceptor.id = response.id;
			})
		}

		porcentaje(){
			this.giros.porcentajeDescuento = this.giros.monto * 0.50 ;
		}

		crearGiro(){

			this.girosService.save(this.giros).$promise
			.then(response => {
				alert('Giro Enviado Exitosamente');
				this.$state.go('main');
			})
			.catch(err => console.log("ERROR",err));
		}




		}

GirosCreateComponent.$inject=['girosService','ciudadesService','clientesService','$state'];
angular.module('palmiGirosApp')
	.component('girosCreate',{
		templateUrl:"app/giros/giros-create/giros-create.html",
		controller:GirosCreateComponent,
		controllerAs:'vm'
	});

})();
