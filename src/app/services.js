'use strict';
(function(){

	function BaseService(_self, $http){

		var apiUrl = "https://api.mongolab.com/api/1/databases/genericstests/collections";
		var apiKey = "FFr7JZSr2qjwk47Z5ZSG0HU-fUjhNOuQ";

		_self.list = function(){
			return $http.get(apiUrl + "/contatos", { params: { apiKey: apiKey } });
		};

		_self.save = function(entity){
			return $http.post(apiUrl + "/contatos", entity, { params: { apiKey: apiKey } });
		};

		_self.remove = function(entity){
			return $http.delete(apiUrl + "/contatos/" + entity._id.$oid, { params: { apiKey: apiKey, q: entity } });
		};

	}

	function ContatosService($http){

		var service = {};
		BaseService(service, $http);

		return service;
	};
	ContatosService.$inject = ['$http'];
	angular.module('genericsapp').factory('contatosService', ContatosService);
})();