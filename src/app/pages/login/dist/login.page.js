"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginPage = void 0;
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
var sweetalert2_1 = require("sweetalert2");
var LoginPage = /** @class */ (function () {
    function LoginPage(menuController, router, util, navCtrl, api) {
        this.menuController = menuController;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.api = api;
        this.email = '';
        this.password = '';
        this.loggedIn = false;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log('login');
        if (!this.email || !this.password) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
        }
        var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailfilter.test(this.email)) {
            this.util.showToast(this.util.getString('Please enter valid email'), 'dark', 'bottom');
            return false;
        }
        this.loggedIn = true;
        var param = {
            email: this.email,
            password: this.password
        };
        this.api.post('users/login', param).subscribe(function (data) {
            console.log(data);
            if (data && data.status === 200) {
                if (data && data.data && data.data.type === 'store') {
                    if (data.data.status === '1') {
                        localStorage.setItem('uid', data.data.id);
                        localStorage.setItem('name', data.data.first_name + ' ' + data.data.last_name);
                        localStorage.setItem('email', data.data.email);
                        localStorage.setItem('cover', data.data.cover);
                        var store = {
                            id: data.data.id
                        };
                        _this.api.post('stores/getByUid', store).subscribe(function (data) {
                            _this.loggedIn = false;
                            console.log('*******************', data);
                            if (data && data.status === 200 && data.data && data.data.length) {
                                _this.util.store = data.data[0];
                                localStorage.setItem('suid', data.data[0].id);
                                _this.menuController.enable(true);
                                _this.navCtrl.navigateRoot(['']);
                            }
                        }, function (error) {
                            _this.loggedIn = false;
                            _this.util.errorToast(_this.util.getString('Something went wrong'));
                            console.log(error);
                        });
                    }
                    else {
                        _this.loggedIn = false;
                        console.log('not valid');
                        sweetalert2_1["default"].fire({
                            title: _this.util.getString('Error'),
                            text: _this.util.getString('Your are blocked please contact administrator'),
                            icon: 'error',
                            showConfirmButton: true,
                            showCancelButton: true,
                            confirmButtonText: _this.util.getString('Need Help?'),
                            backdrop: false,
                            background: 'white'
                        }).then(function (status) {
                            if (status && status.value) {
                                localStorage.setItem('helpId', data.data.id);
                                _this.router.navigate(['inbox']);
                            }
                        });
                    }
                }
                else {
                    _this.loggedIn = false;
                    _this.util.errorToast(_this.util.getString('Not valid user'));
                    _this.email = '';
                    _this.password = '';
                }
            }
            else if (data && data.status === 500) {
                _this.loggedIn = false;
                _this.util.errorToast(data.data.message);
            }
            else {
                _this.loggedIn = false;
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            console.log(error);
            _this.loggedIn = false;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    LoginPage.prototype.create = function () {
        this.router.navigate(['register']);
    };
    LoginPage.prototype.reset = function () {
        this.router.navigate(['forgot']);
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        console.log('enter');
        this.menuController.enable(false);
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss']
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
