'use strict';
(function(){
	function ContatosService(){

		var contatosService = {};
		var contatos = [
			{
				nome: 'Brunno',
				fone: '1234-5678'
			},{
				nome: 'Fulano',
				fone: '4321-8765'
			}
		];

		contatosService.list = function(){
			return contatos;
		};

		contatosService.save = function(contato){
			contatos.push(contato);
		};

		contatosService.remove = function(contato){
			var index = contatos.indexOf(contato);
			contatos.splice(index, 1);
		};

		return contatosService;
	};

	angular.module('genericsapp').factory('contatosService', ContatosService);
})();