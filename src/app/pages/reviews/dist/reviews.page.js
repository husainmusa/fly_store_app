"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReviewsPage = void 0;
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
var moment = require("moment");
var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(api, util, navCtrl) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.dummy = [];
        this.reviews = [];
        this.getReviews();
    }
    ReviewsPage.prototype.ngOnInit = function () {
    };
    ReviewsPage.prototype.getReviews = function () {
        var _this = this;
        var param = {
            id: localStorage.getItem('uid'),
            where: 'sid = ' + localStorage.getItem('uid')
        };
        this.dummy = Array(10);
        this.api.post('rating/getFromIDs', param).subscribe(function (data) {
            _this.dummy = [];
            console.log(data);
            if (data && data.status === 200) {
                _this.reviews = data.data;
            }
        }, function (error) {
            console.log(error);
            _this.dummy = [];
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    ReviewsPage.prototype.back = function () {
        this.navCtrl.back();
    };
    ReviewsPage.prototype.getDate = function (date) {
        return moment(date).format('lll');
    };
    ReviewsPage = __decorate([
        core_1.Component({
            selector: 'app-reviews',
            templateUrl: './reviews.page.html',
            styleUrls: ['./reviews.page.scss']
        })
    ], ReviewsPage);
    return ReviewsPage;
}());
exports.ReviewsPage = ReviewsPage;
