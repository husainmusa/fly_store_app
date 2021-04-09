"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ChatsPage = void 0;
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
var ChatsPage = /** @class */ (function () {
    function ChatsPage(api, util, router, navCtrl) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.navCtrl = navCtrl;
        this.dummy = [];
        this.users = [];
        this.getChats();
    }
    ChatsPage.prototype.getChats = function () {
        var _this = this;
        var param = {
            id: localStorage.getItem('uid')
        };
        this.dummy = Array(10);
        this.api.post('chats/getByGroup', param).subscribe(function (data) {
            console.log(data);
            if (data && data.status === 200) {
                var info_1 = [];
                data.data.forEach(function (element) {
                    info_1.push(element.from_id);
                    info_1.push(element.room_id);
                });
                var uniq = __spreadArrays(new Set(info_1));
                uniq = uniq.filter(function (x) { return x !== localStorage.getItem('uid'); });
                console.log('uniq->>', uniq);
                var uid = {
                    id: uniq.join()
                };
                _this.api.post('users/getChatsNames', uid).subscribe(function (uids) {
                    _this.dummy = [];
                    if (uids && uids.status === 200) {
                        _this.users = uids.data;
                    }
                }, function (error) {
                    console.log(error);
                    _this.users = [];
                    _this.dummy = [];
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                });
            }
            else {
                _this.dummy = [];
            }
        }, function (error) {
            console.log(error);
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    ChatsPage.prototype.ngOnInit = function () {
    };
    ChatsPage.prototype.back = function () {
        this.navCtrl.back();
    };
    ChatsPage.prototype.onAdmin = function () {
        var param = {
            queryParams: {
                id: 0,
                name: 'Support'
            }
        };
        this.router.navigate(['inbox'], param);
    };
    ChatsPage.prototype.onChat = function (item) {
        var param = {
            queryParams: {
                id: item.id,
                name: item.first_name + ' ' + item.last_name
            }
        };
        this.router.navigate(['inbox'], param);
    };
    ChatsPage = __decorate([
        core_1.Component({
            selector: 'app-chats',
            templateUrl: './chats.page.html',
            styleUrls: ['./chats.page.scss']
        })
    ], ChatsPage);
    return ChatsPage;
}());
exports.ChatsPage = ChatsPage;
