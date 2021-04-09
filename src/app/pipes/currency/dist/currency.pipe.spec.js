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
var currency_pipe_1 = require("./currency.pipe");
describe('CurrencyPipe', function () {
    it('create an instance', function () {
        var pipe = new currency_pipe_1.CurrencyPipe();
        expect(pipe).toBeTruthy();
    });
});
