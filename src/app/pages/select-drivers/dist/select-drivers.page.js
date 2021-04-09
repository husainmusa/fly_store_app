"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SelectDriversPage = void 0;
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
var core_1 = require("@angular/core");
var SelectDriversPage = /** @class */ (function () {
    function SelectDriversPage(navParam, modalController, api, util) {
        this.navParam = navParam;
        this.modalController = modalController;
        this.api = api;
        this.util = util;
        this.drivers = [];
        this.selectedDriver = '';
        this.drivers = this.navParam.get('item');
        console.log('drivers->', this.drivers);
        if (this.drivers.length && this.drivers.length > 0) {
            this.selectedDriver = this.drivers[0].id;
        }
    }
    SelectDriversPage.prototype.ngOnInit = function () {
    };
    SelectDriversPage.prototype.select = function () {
        var _this = this;
        console.log(this.selectedDriver);
        var driver = this.drivers.filter(function (x) { return x.id === _this.selectedDriver; });
        console.log(driver);
        this.modalController.dismiss(driver, 'selected');
    };
    SelectDriversPage.prototype.close = function () {
        this.modalController.dismiss([], 'close');
    };
    SelectDriversPage = __decorate([
        core_1.Component({
            selector: 'app-select-drivers',
            templateUrl: './select-drivers.page.html',
            styleUrls: ['./select-drivers.page.scss']
        })
    ], SelectDriversPage);
    return SelectDriversPage;
}());
exports.SelectDriversPage = SelectDriversPage;
