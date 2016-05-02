'use strict';

angular.module('ds.inventory')
   .factory('InventoryREST', ['Restangular', 'SiteConfigSvc', function(Restangular, siteConfig){
       return {
           /** Endpoint for inventory.*/
           Inventory: Restangular.withConfig(function (RestangularConfigurer) {
               RestangularConfigurer.setBaseUrl(siteConfig.apis.inventory.baseUrl);
           })
       };
   }]);
