"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForgotPage = void 0;
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
var ForgotPage = /** @class */ (function () {
    function ForgotPage(api, util, navCtrl) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.div_type = 1;
        this.sent = false;
        this.email = '';
        this.otp = '';
        this.password = '';
        this.repass = '';
        this.verified = false;
    }
    ForgotPage.prototype.ngOnInit = function () {
    };
    ForgotPage.prototype.sendOTP = function () {
        var _this = this;
        console.log(this.email, ';sendOTPDriver');
        if (!this.email) {
            this.util.showToast(this.util.getString('Email is required'), 'dark', 'bottom');
            return false;
        }
        var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailfilter.test(this.email)) {
            this.util.showToast(this.util.getString('Please enter valid email'), 'dark', 'bottom');
            return false;
        }
        this.loggedIn = true;
        var param = {
            email: this.email
        };
        this.api.post('users/sendOTP', param).subscribe(function (data) {
            console.log(data);
            _this.loggedIn = false;
            if (data && data.status === 200) {
                _this.id = data.data.id;
                _this.loggedIn = false;
                _this.div_type = 2;
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    _this.util.errorToast(data.data.message);
                    return false;
                }
                _this.util.errorToast(_this.util.getString('Something went wrong'));
                return false;
            }
        }, function (error) {
            console.log(error);
            _this.loggedIn = false;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    ForgotPage.prototype.verifyOTP = function () {
        var _this = this;
        // this.div_type = 3;
        if (!this.otp || this.otp === '') {
            this.util.showToast(this.util.getString('OTP is required'), 'dark', 'bottom');
            return false;
        }
        this.loggedIn = true;
        var param = {
            id: this.id,
            otp: this.otp
        };
        this.api.post('users/verifyOTP', param).subscribe(function (data) {
            console.log(data);
            _this.loggedIn = false;
            if (data && data.status === 200) {
                _this.loggedIn = false;
                _this.div_type = 3;
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    _this.util.errorToast(data.data.message);
                    return false;
                }
                _this.util.errorToast(_this.util.getString('Something went wrong'));
                return false;
            }
        }, function (error) {
            console.log(error);
            _this.loggedIn = false;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    ForgotPage.prototype.sendEmail = function () {
        var _this = this;
        console.log('pwddd0<<<<<<', this.password);
        if (!this.password || !this.repass || this.password === '' || this.repass === '') {
            this.util.errorToast(this.util.getString('All Field are required'));
            return false;
        }
        var param = {
            email: this.email,
            pwd: this.password
        };
        this.loggedIn = true;
        this.api.post('users/update_password', param).subscribe(function (data) {
            console.log(data);
            _this.loggedIn = false;
            if (data && data.status === 200) {
                _this.loggedIn = false;
                _this.util.errorToast(_this.util.getString('Password Updated'));
                _this.back();
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    _this.util.errorToast(data.data.message);
                    return false;
                }
                _this.util.errorToast(_this.util.getString('Something went wrong'));
                return false;
            }
        }, function (error) {
            console.log(error);
            _this.loggedIn = false;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    ForgotPage.prototype.back = function () {
        this.navCtrl.back();
    };
    ForgotPage = __decorate([
        core_1.Component({
            selector: 'app-forgot',
            templateUrl: './forgot.page.html',
            styleUrls: ['./forgot.page.scss']
        })
    ], ForgotPage);
    return ForgotPage;
}());
exports.ForgotPage = ForgotPage;
