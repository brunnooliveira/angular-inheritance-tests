'use strict';
(function(){
	
	function BaseController(_self, service){
		_self.entitys = [];

		_self.listar = function(){
			_self.entitys = service.list();
			console.log(_self.entitys);
		};
	}
	angular.module('genericsapp').controller('BaseController', BaseController);

	function MainController($controller, contatosService){
		var _self = this;
		
		angular.extend(_self, $controller('BaseController', {_self: _self, service: contatosService}));
	}

	MainController.$inject = ['$controller', 'contatosService'];
	angular.module('genericsapp').controller('MainController', MainController);
})();