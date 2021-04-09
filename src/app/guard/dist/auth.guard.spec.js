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
var auth_guard_1 = require("./auth.guard");
describe('AuthGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [auth_guard_1.AuthGuard]
        });
    });
    it('should ...', testing_1.inject([auth_guard_1.AuthGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
