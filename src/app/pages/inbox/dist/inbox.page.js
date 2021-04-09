"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InboxPage = void 0;
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
var angular_1 = require("@ionic/angular");
var moment = require("moment");
var InboxPage = /** @class */ (function () {
    function InboxPage(route, navCtrl, api, util) {
        var _this = this;
        this.route = route;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.msg = '';
        this.messages = [];
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            if (data && data.id && data.name) {
                _this.uid = localStorage.getItem('uid');
                _this.id = data.id;
                _this.loaded = false;
                _this.name = data.name;
                _this.getChats();
                _this.interval = setInterval(function () {
                    console.log('calling in interval');
                    _this.getChats();
                }, 12000);
            }
            else {
                _this.navCtrl.back();
            }
        });
    }
    InboxPage.prototype.ionViewDidLeave = function () {
        console.log('leaae');
        clearInterval(this.interval);
    };
    InboxPage.prototype.ngOnInit = function () {
    };
    InboxPage.prototype.getChats = function () {
        var _this = this;
        // store _ opponent
        var param = {
            id: localStorage.getItem('uid') + '_' + this.id,
            oid: this.id
        };
        this.api.post('chats/getById', param).subscribe(function (data) {
            console.log(data);
            _this.loaded = true;
            _this.yourMessage = true;
            if (data && data.status === 200) {
                _this.messages = data.data;
                _this.myContent.scrollToBottom(300);
            }
        }, function (error) {
            console.log(error);
            _this.loaded = true;
            _this.yourMessage = true;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    InboxPage.prototype.back = function () {
        this.navCtrl.back();
    };
    InboxPage.prototype.sendMessage = function () {
        var _this = this;
        // store to opponent
        console.log(this.msg);
        if (!this.msg || this.msg === '') {
            return false;
        }
        var msg = this.msg;
        this.msg = '';
        var param = {
            room_id: this.id,
            uid: localStorage.getItem('uid') + '_' + this.id,
            from_id: localStorage.getItem('uid'),
            message: msg,
            message_type: 'store',
            status: 1,
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
        };
        this.yourMessage = false;
        this.myContent.scrollToBottom(300);
        this.api.post('chats/save', param).subscribe(function (data) {
            console.log(data);
            if (data && data.status === 200) {
                _this.getChats();
            }
            else {
                _this.yourMessage = true;
            }
        }, function (error) {
            console.log(error);
            _this.yourMessage = true;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    __decorate([
        core_1.ViewChild(angular_1.IonContent, { read: angular_1.IonContent, static: false })
    ], InboxPage.prototype, "myContent");
    InboxPage = __decorate([
        core_1.Component({
            selector: 'app-inbox',
            templateUrl: './inbox.page.html',
            styleUrls: ['./inbox.page.scss']
        })
    ], InboxPage);
    return InboxPage;
}());
exports.InboxPage = InboxPage;
