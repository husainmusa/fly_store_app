"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HelpPage = void 0;
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
var HelpPage = /** @class */ (function () {
    function HelpPage(util, api, navCtrl) {
        var _this = this;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        var param = {
            id: 6
        };
        this.loaded = false;
        this.api.post('pages/getById', param).subscribe(function (data) {
            console.log(data);
            _this.loaded = true;
            if (data && data.status === 200 && data.data.length > 0) {
                var info = data.data[0];
                _this.content = info.content;
            }
        }, function (error) {
            console.log(error);
            _this.loaded = true;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    }
    HelpPage.prototype.ngOnInit = function () {
    };
    HelpPage.prototype.getContent = function () {
        return this.content;
    };
    HelpPage.prototype.back = function () {
        this.navCtrl.back();
    };
    HelpPage.prototype.openMenu = function () {
        this.util.openMenu();
    };
    HelpPage = __decorate([
        core_1.Component({
            selector: 'app-help',
            templateUrl: './help.page.html',
            styleUrls: ['./help.page.scss']
        })
    ], HelpPage);
    return HelpPage;
}());
exports.HelpPage = HelpPage;
