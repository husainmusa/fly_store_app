"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SubCategoryPage = void 0;
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
var SubCategoryPage = /** @class */ (function () {
    function SubCategoryPage(modalCtrl, api, util, navParam) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.util = util;
        this.navParam = navParam;
        this.dummy = Array(20);
        this.category = [];
        this.dummyCate = [];
        var cateId = this.navParam.get('cateId');
        this.id = this.navParam.get('subId');
        var param = {
            id: cateId
        };
        this.api.post('subcate/getByCId', param).subscribe(function (data) {
            console.log(data);
            _this.dummy = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                _this.category = data.data;
                _this.dummyCate = data.data;
            }
            else {
                _this.util.errorToast(_this.util.getString('No category found'));
            }
        }, function (error) {
            _this.util.errorToast(_this.util.getString('Something went wrong'));
            _this.dummy = [];
            console.log(error);
        });
    }
    SubCategoryPage.prototype.ngOnInit = function () {
    };
    SubCategoryPage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    SubCategoryPage.prototype.selected = function () {
        var _this = this;
        var name = this.category.filter(function (x) { return x.id === _this.id; });
        console.log('name', name);
        this.modalCtrl.dismiss({ id: this.id, name: name[0].name }, 'selected');
    };
    SubCategoryPage.prototype.onSearchChange = function (event) {
        console.log(event.detail.value);
        this.category = this.dummyCate.filter(function (ele) {
            return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
        });
    };
    SubCategoryPage = __decorate([
        core_1.Component({
            selector: 'app-sub-category',
            templateUrl: './sub-category.page.html',
            styleUrls: ['./sub-category.page.scss']
        })
    ], SubCategoryPage);
    return SubCategoryPage;
}());
exports.SubCategoryPage = SubCategoryPage;
