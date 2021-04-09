"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AboutPage = void 0;
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
var AboutPage = /** @class */ (function () {
    function AboutPage(util, api, navCtrl) {
        var _this = this;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        var param = {
            id: 1
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
            // this.util.errorToast(this.util.getString('Something went wrong'));
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.prototype.getContent = function () {
        return this.content;
    };
    AboutPage.prototype.back = function () {
        this.navCtrl.back();
    };
    AboutPage.prototype.openMenu = function () {
        this.util.openMenu();
    };
    AboutPage = __decorate([
        core_1.Component({
            selector: 'app-about',
            templateUrl: './about.page.html',
            styleUrls: ['./about.page.scss']
        })
    ], AboutPage);
    return AboutPage;
}());
exports.AboutPage = AboutPage;
