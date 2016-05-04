/**
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2015 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ('Confidential Information'). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */
'use strict';

(function() {
	/** BACKEND-MOCK-INSTRUCTIONS:
	 *  Use the querystring parameter ?nobackend in url to load this module, otherwise it is empty in codebase.
	 *  This module is multi-purpose. It can be used to a) mock data b) mock errors or c) passthrough desired services.
	 *  To change state of mocking from error to data, change comments to pass back data, error integer, or passthrough at bottom.
	 *  For error-mock: uncomment integer to mock status code. Integer return will hit error handler and mock error. Also comment out mock data.
	 *  For data-mock: uncomment the JSON data return, and comment out the status code integer.
	 *  Realize that some mock data might go stale based on session state, if so, then paste updated JSON from response tabs.
	 *  Sometimes clicking back the ?nobackend parameter can be removed causing unexpected results. Good to watch for that.
	 *  Also, be sure that the domain and tenant id settings (below) are correct for your build environment.
	**/
	if( !document.URL.match(/\?nobackend$/) ){
		// if not requested only add a blank stub to app dependency.
		angular.module('ds.backendMock', []);

	} else if (document.URL.match(/\?nobackend$/)) {

	    // if the query string is present add a module with a run definition to replace the back end.
		angular.module('ds.backendMock', ['ngMockE2E', 'ngResource'])

			.run(function($httpBackend, $resource) {

				console.info('Running in backend mode');

				//https://api.yaas.io/hybris/customer/v1/inventorydemo/loginconfig
				$httpBackend.whenGET(/.*?customer\/v1\/inventorydemo\/loginconfig?.*/g)
					.respond({});

				//https://api.yaas.io/hybris/site/v1/inventorydemo/sites
				$httpBackend.whenGET(/.*?site\/v1\/inventorydemo\/sites?.*/g)
					.respond([{'code':'main','name':'Arvato Shop','active':true,'defaultLanguage':'en','languages':['en','de'],'currency':'USD','homeBase':{'address':{'zipCode':'unknown','country':'US'}},'shipToCountries':['US'],'default':true}]);

				//https://api.yaas.io/hybris/site/v1/inventorydemo/sites/main
				$httpBackend.whenGET(/.*?site\/v1\/inventorydemo\/sites\/main?.*/g)
					.respond({'code':'main','name':'Arvato Shop','active':true,'defaultLanguage':'en','languages':['en','de'],'currency':'USD','homeBase':{'address':{'zipCode':'unknown','country':'US'}},'shipToCountries':['US'],'default':true});

				//https://api.yaas.io/hybris/cart/v1/inventorydemo/carts
				$httpBackend.whenGET(/.*?cart\/v1\/inventorydemo\/carts?.*/g)
					.respond(404);

				//https://api.yaas.io/hybris/category/v1/inventorydemo/categories
				$httpBackend.whenGET(/.*?category\/v1\/inventorydemo\/categories?.*/g)
					.respond([{'metadata':{},'id':'427638016','name':'Office Supplies','description':'Office Supplies','media':[],'published':true}]);

				//https://api.yaas.io/hybris/productdetails/v1/inventorydemo/productdetails
				$httpBackend.whenGET(/.*?productdetails\/v1\/inventorydemo\/productdetails7?.*/g)
					.respond([ {
						'product' : {
							'id' : '5718efdaecb719001db4bfb7',
							'sku' : '0000383203982',
							'name' : 'Arvato Coffee Cup',
							'description' : 'Arvato Coffee Cup',
							'published' : true,
							'metadata' : {
								'createdAt' : '2016-04-21T15:20:58.797+0000',
								'modifiedAt' : '2016-05-04T15:44:01.243+0000',
								'version' : 7,
								'mixins' : {
									'inventory' : 'https://api.yaas.io/hybris/schema/v1/hybriscommerce/inventorySchema-v1',
									'taxCodes' : 'https://api.yaas.io/hybris/schema/v1/hybriscommerce/productTaxCodeMixin-1.0.0'
								}
							},
							'media' : [ {
								'id' : 'cf380dea-6008-405e-bc14-990eeec5e6a9',
								'url' : 'https://api.yaas.io/hybris/media/v2/public/files/572a1517cca78f001dd44b6e',
								'contentType' : 'image/png',
								'stored' : true
							} ],
							'mixins' : {
								'inventory' : {
									'inStock' : true
								}
							}
						},
						'prices' : [ {
							'priceId' : '5718efdbad3dee001d1d8410',
							'originalAmount' : 4.99,
							'effectiveAmount' : 4.99,
							'currency' : 'USD'
						} ]
					} ]);

				//https://api.yaas.io/hybris/productdetails/v1/inventorydemo/productdetails/5718efdaecb719001db4bfb7
				$httpBackend.whenGET(/.*?productdetails\/v1\/inventorydemo\/productdetails\/5718efdaecb719001db4bfb7?.*/g)
					.respond({
						'product' : {
							'id' : '5718efdaecb719001db4bfb7',
							'sku' : '0000383203982',
							'name' : 'Arvato Coffee Cup',
							'description' : 'Arvato Coffee Cup',
							'published' : true,
							'metadata' : {
								'createdAt' : '2016-04-21T15:20:58.797+0000',
								'modifiedAt' : '2016-05-04T15:44:01.243+0000',
								'version' : 7,
								'mixins' : {
									'inventory' : 'https://api.yaas.io/hybris/schema/v1/hybriscommerce/inventorySchema-v1',
									'taxCodes' : 'https://api.yaas.io/hybris/schema/v1/hybriscommerce/productTaxCodeMixin-1.0.0'
								}
							},
							'media' : [ {
								'id' : 'cf380dea-6008-405e-bc14-990eeec5e6a9',
								'url' : 'https://api.yaas.io/hybris/media/v2/public/files/572a1517cca78f001dd44b6e',
								'contentType' : 'image/png',
								'stored' : true
							} ],
							'mixins' : {
								'inventory' : {
									'inStock' : true
								}
							}
						},
						'prices' : [ {
							'priceId' : '5718efdbad3dee001d1d8410',
							'originalAmount' : 4.99,
							'effectiveAmount' : 4.99,
							'currency' : 'USD'
						} ],
						'categories' : [ {
							'metadata' : { },
							'id' : '427638016',
							'name' : 'Office Supplies',
							'description' : 'Office Supplies',
							'media' : [ ],
							'published' : true
						} ]
					});

				//https://api.yaas.io/hybris/shipping/v1/inventorydemo/main/zones
				$httpBackend.whenGET(/.*?shipping\/v1\/inventorydemo\/main\/zones?.*/g)
					.respond([]);

				//https://api.yaas.io/arvato/inventory/test/tenants/inventorydemo/sources/retail_001/stocks/0000383203982
				$httpBackend.whenGET(/.*?inventory\/test\/tenants\/inventorydemo\/sources\/retail_001\/stocks\/0000383203982?.*/g)
					.respond({'sourceId':'retail_001','sku':'0000383203982','onHand':2,'reserved':0,'available':25,'countByZone':{'bryan_office':2}});

				$httpBackend.whenGET('/img/coffee_cup.png').passThrough();

				// dont mock everything else, specify pass through to avoid error.
				$httpBackend.whenGET(/^\w+.*/).passThrough();
				$httpBackend.whenPOST(/^\w+.*/).passThrough();

			});
		}

})(angular);