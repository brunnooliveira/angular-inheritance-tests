'use strict';
(function(){
	
	function BaseController(_self, service){
		_self.entitys = [];

		_self.listar = function(){
			service.list().then(function(response){
				console.log(response);
				_self.entitys = response.data;
			});
		};

		_self.salvar = function(entity){
			service.save(entity).then(function(response){
				console.log(response);	
				_self.listar();
			});
		};

		_self.apagar = function(entity){
			service.remove(entity).then(function(response){
				console.log(response);	
				_self.listar();
			});
		};
	}
	angular.module('genericsapp').controller('BaseController', BaseController);

	function MainController($controller, contatosService){
		var _self = this;
		BaseController(_self, contatosService);
	}

	MainController.$inject = ['$controller', 'contatosService'];
	angular.module('genericsapp').controller('MainController', MainController);
})();