"use strict";
exports.__esModule = true;
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
var testing_1 = require("@angular/core/testing");
var api_service_1 = require("./api.service");
describe('ApiService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(api_service_1.ApiService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
