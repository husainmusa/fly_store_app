"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
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
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
var sweetalert2_1 = require("sweetalert2");
var ApiService = /** @class */ (function () {
    function ApiService(http, nativeHttp) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.baseUrl = '';
        this.mediaURL = '';
        this.baseUrl = environment_1.environment.baseURL;
        this.mediaURL = environment_1.environment.mediaURL;
    }
    ApiService.prototype.alerts = function (title, message, type) {
        sweetalert2_1["default"].fire(title, message, type);
    };
    ApiService.prototype.uploadFile = function (files) {
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('userfile', f); });
        return this.http.post(this.baseUrl + 'users/upload_image', formData);
    };
    ApiService.prototype.getCurrencyCode = function () {
        return environment_1.environment.general.code;
    };
    ApiService.prototype.getCurrecySymbol = function () {
        return environment_1.environment.general.symbol;
    };
    ApiService.prototype.sendNotification = function (msg, title, id) {
        var body = {
            app_id: environment_1.environment.onesignal.appId,
            include_player_ids: [id],
            headings: { en: title },
            contents: { en: msg },
            data: { task: msg }
        };
        var header = {
            headers: new http_1.HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', "Basic " + environment_1.environment.onesignal.restKey)
        };
        return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
    };
    ApiService.prototype.JSON_to_URLEncoded = function (element, key, list) {
        var new_list = list || [];
        if (typeof element === 'object') {
            for (var idx in element) {
                this.JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, new_list);
            }
        }
        else {
            new_list.push(key + '=' + encodeURIComponent(element));
        }
        return new_list.join('&');
    };
    ApiService.prototype.post = function (url, body) {
        var header = {
            headers: new http_1.HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Basic', "" + environment_1.environment.authToken)
        };
        var param = this.JSON_to_URLEncoded(body);
        console.log(param);
        return this.http.post(this.baseUrl + url, param, header);
    };
    ApiService.prototype.get = function (url) {
        var header = {
            headers: new http_1.HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Basic', "" + environment_1.environment.authToken)
        };
        return this.http.get(this.baseUrl + url, header);
    };
    ApiService.prototype.externalGet = function (url) {
        return this.http.get(url);
    };
    ApiService.prototype.nativePost = function (url, post) {
        console.log(this.baseUrl + url, post);
        return this.nativeHttp.post(this.baseUrl + url, post, {
            Basic: "" + environment_1.environment.authToken
        });
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
