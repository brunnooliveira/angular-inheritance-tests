'use strict';
(function(){
	
	function BaseController(service){
		var _self = this;
		_self.entitys = [];

		_self.listar = function(){
			_self.entitys = service.list();
			console.log(_self.entitys);
		};
	}
	angular.module('genericsapp').controller('BaseController', BaseController);

	function MainController($controller, contatosService){
		var _self = this;
		angular.extend(_self, $controller('BaseController', {service: contatosService}));
	}

	MainController.$inject = ['$controller', 'contatosService'];
	angular.module('genericsapp').controller('MainController', MainController);
})();