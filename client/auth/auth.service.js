'use strict';


angular.module("palmiGirosApp")
.factory('AuthService', AuthService);

AuthService.$inject  = ['$auth','$state'];
function AuthService($auth,$state){
	var Auth = {
		login: login,
		logout: logout,
		isAdmin: isAdmin,
		isCompany: isCompany,
		datosUsuario: datosUsuario,
		idUsuario: idUsuario,
		isAuthenticated: isAuthenticated,
		getRoles: getRoles
	}

	function login(usuarios,collback){
		$auth.login(usuarios)
		.then(response => {
			console.log("Login ok",response);
			console.log(Auth.isAdmin());
			$state.go('main');
		})
		.catch(err =>{
			console.log("Error de login");
			alert("Usuario o Contraseña incorrectos!!");
			$state.go('login');
		})
	}

	function logout(){
		if($auth.isAuthenticated()){
			$auth.logout()
			.then(response => {
        console.log("Logout ok", response);
				$state.go('main');
			})
		}

	}
	function isAdmin(){
		if(Auth.isAuthenticated()){
				//console.log("ROLES",$auth.getPayload().roles);
				if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
					return true;
				}else{
					return false;
				}
		}else{
			return false;
		}

	}

	function isUser(){
		if(Auth.isAuthenticated()){
				//console.log("ROLES",$auth.getPayload().roles);
				if($auth.getPayload().roles.indexOf("USR") !== -1){
					return true;
				}else{
					return false;
				}
		}else{
			return false;
		}

	}

	function isCompany(){
		if(Auth.isAuthenticated()){
				console.log("ROLES",$auth.getPayload().roles);
				if($auth.getPayload().roles.indexOf("USRE") !== -1){
					return true;
				}else{
					return false;
				}
		}else{
			return false;
		}

	}


	function datosUsuario(){
		if($auth.isAuthenticated()){
			return $auth.getPayload().user;
		}else{
			return false;
		}
	}
	function idUsuario() {
		if($auth.isAuthenticated()){
			return $auth.getPayload().sub;
		}else{
			return false;
		}

	}
	function isAuthenticated(){
		if($auth.isAuthenticated()){
			return true;
		}else{
			return false;
		}
	}
	function getRoles() {
		if($auth.isAuthenticated()){
			return $auth.getPayload().roles;
		}else{
			return false;
		}

	}

	return Auth;

}
