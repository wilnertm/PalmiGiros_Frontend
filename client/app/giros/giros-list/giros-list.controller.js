(function(){
	'use strict';

	class GirosListComponent{
		constructor(girosService,ciudadesService,clientesService){
			this.girosService = girosService;
			this.ciudadesService = ciudadesService;
			this.clientesService = clientesService;
			this.giros = {
				idClienteReceptor:{
					id: null
				}
			}

		}



		giroPendiente(){
			this.clientesService.encontrarCliente({documento:this.numDoc}).$promise
			.then(response => {
				console.log("RECEPTOR",response);
				this.clienteReceptor = response;
				this.giros.idClienteReceptor.id = response.id;
				this.girosService.encontrarGiro({idClienteReceptor:this.giros.idClienteReceptor.id}).$promise
				.then(response => {
					this.giros = response;
					console.log("GIROS", response);
				});
			})
		}

// 		cambiarEstado(itemUser){
// 	if(itemUser.estado){
// 		itemUser.estado = false;
// 		// this.enviarEstado(itemUser);
// 	}else{
// 		itemUser.estado = true;
// 		this.enviarEstado(itemUser);
//
// 	}
// }
cambiarEstado(itemUser){
	if(itemUser.estado){

		itemUser.estado = false;
		// this.enviarEstado(itemUser);
}else{
			itemUser.estado = true;
			this.enviarEstado(itemUser);

}

}

enviarEstado(itemUser){
			this.girosService.update({id:itemUser.id},itemUser).$promise
			.then(response =>{
				console.log("Estado enviado",response);

			})

			.catch(err=> console.log(err));


	}


	}



GirosListComponent.$inject=['girosService','ciudadesService','clientesService'];
angular.module('palmiGirosApp')
	.component('girosList',{
		templateUrl:"app/giros/giros-list/giros-list.html",
		controller:GirosListComponent,
		controllerAs:'vm'
	});

})();
