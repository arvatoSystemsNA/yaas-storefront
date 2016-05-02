'use strict';

angular.module('ds.inventory')
    .factory('InventorySvc', ['InventoryREST',
        function(InventoryREST){
            return {
                getStock: function (sku) {
                    return InventoryREST.Inventory.one('sources', 'retail_001').one('stocks', sku).get();
                }
            };
        }]);
