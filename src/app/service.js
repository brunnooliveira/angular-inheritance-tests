'use strict';
(function(){

	function BaseService(){
		var service = {};
		service.listEntity = [];
		
		service.list = function(){
			return service.listEntity;
		};

		service.save = function(entity){
			service.listEntity.push(entity);
		};

		service.remove = function(entity){
			var index = service.listEntity.indexOf(entity);
			service.listEntity.splice(index, 1);
		};

		return service;
	}
	angular.module('genericsapp').factory('baseService', BaseService);


	function ContatosService(baseService){
		
		var contatos = [
			{
				nome: 'Brunno',
				fone: '1234-5678'
			},{
				nome: 'Fulano',
				fone: '4321-8765'
			}
		];

		baseService.listEntity = contatos;

		return baseService;
	};
	ContatosService.$inject = ['baseService'];
	angular.module('genericsapp').factory('contatosService', ContatosService);
})();