'use strict';
(function(){

	function ContatosService($http){

		var service = {};
		
		var apiUrl = "https://api.mongolab.com/api/1/databases/genericstests/collections";
		var apiKey = "FFr7JZSr2qjwk47Z5ZSG0HU-fUjhNOuQ";

		service.list = function(){
			return $http.get(apiUrl + "/contatos", { params: { apiKey: apiKey } });
			//return service.listEntity;
		};

		service.save = function(entity){
			return $http.post(apiUrl + "/contatos", entity, { params: { apiKey: apiKey } });
			//contatos.push(entity);
		};

		service.remove = function(entity){
			return $http.delete(apiUrl + "/contatos/" + entity._id.$oid, { params: { apiKey: apiKey, q: entity } });
			//var index = contatos.indexOf(entity);
			//contatos.splice(index, 1);
		};

		return service;
	};
	ContatosService.$inject = ['$http'];
	angular.module('genericsapp').factory('contatosService', ContatosService);
})();