"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountPage = void 0;
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
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, router, util, api) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.util = util;
        this.api = api;
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.editProfile = function () {
        this.router.navigate(['/edit-profile']);
    };
    AccountPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.navigateRoot(['/login']);
    };
    AccountPage.prototype.getProducts = function () {
        this.router.navigate(['/tabs/tab3/products']);
    };
    AccountPage.prototype.getReviews = function () {
        this.router.navigate(['/reviews']);
    };
    AccountPage.prototype.getLanguages = function () {
        this.router.navigate(['/languages']);
    };
    AccountPage.prototype.changePassword = function () {
        this.router.navigate(['forgot']);
    };
    AccountPage.prototype.goToContact = function () {
        this.router.navigate(['tabs/tab3/contacts']);
    };
    AccountPage.prototype.getName = function () {
        return localStorage.getItem('name') ? localStorage.getItem('name') : 'Groceryee';
    };
    AccountPage.prototype.getEmail = function () {
        return localStorage.getItem('email') ? localStorage.getItem('email') : 'info@app.com';
    };
    AccountPage.prototype.getCover = function () {
        return this.util.store && this.util.store.cover ? this.api.mediaURL + this.util.store.cover : 'assets/imgs/user.png';
    };
    AccountPage.prototype.goToAbout = function () {
        this.router.navigate(['tabs/tab3/about']);
    };
    AccountPage.prototype.goToChats = function () {
        this.router.navigate(['chats']);
    };
    AccountPage.prototype.openMenu = function () {
        this.util.openMenu();
    };
    AccountPage.prototype.goFaqs = function () {
        this.router.navigate(['tabs/tab3/faqs']);
    };
    AccountPage.prototype.goHelp = function () {
        this.router.navigate(['tabs/tab3/help']);
    };
    AccountPage = __decorate([
        core_1.Component({
            selector: 'app-account',
            templateUrl: './account.page.html',
            styleUrls: ['./account.page.scss']
        })
    ], AccountPage);
    return AccountPage;
}());
exports.AccountPage = AccountPage;
