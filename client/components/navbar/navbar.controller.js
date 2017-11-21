'use strict';

 class NavbarController{
   constructor(AuthService,usuariosService,$auth){

   this.AuthService = AuthService;
   this.usuariosService = usuariosService;
   this.$auth = $auth;
 


  }
$onInit(){
  if (this.$auth.isAuthenticated()) {
    this.usuariosService.get({id:this.$auth.getPayload().sub}).$promise
    .then(response=>{
      this.usuarios=response;
      console.log("USUARIO",this.usuarios);
    });
  }


}
 }
NavbarController.$inject=['AuthService','usuariosService','$auth'];
 angular.module('palmiGirosApp')
  .component('navbar', {
    templateUrl: 'components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm'
  });
