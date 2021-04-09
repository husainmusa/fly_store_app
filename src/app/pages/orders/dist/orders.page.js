"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OrdersPage = void 0;
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
var OrdersPage = /** @class */ (function () {
    function OrdersPage(api, util, router) {
        var _this = this;
        this.api = api;
        this.util = util;
        this.router = router;
        this.segment = 1;
        this.newOrders = [];
        this.onGoingOrders = [];
        this.oldOrders = [];
        this.dummy = Array(50);
        this.getOrder();
        this.util.subscribeOrder().subscribe(function (data) {
            _this.getOrders('', false);
        });
    }
    OrdersPage.prototype.ngOnInit = function () {
    };
    OrdersPage.prototype.getOrder = function () {
        console.log('enter');
        this.segment = 1;
        this.newOrders = [];
        this.onGoingOrders = [];
        this.oldOrders = [];
        this.dummy = Array(50);
        this.getOrders('', false);
    };
    OrdersPage.prototype.onClick = function (val) {
        this.segment = val;
    };
    OrdersPage.prototype.goToOrder = function (ids) {
        console.log(ids);
        var navData = {
            queryParams: {
                id: ids.id
            }
        };
        this.router.navigate(['/order-detail'], navData);
    };
    OrdersPage.prototype.getOrders = function (event, haveRefresh) {
        var _this = this;
        this.dummy = Array(50);
        var param = {
            id: localStorage.getItem('uid')
        };
        this.newOrders = [];
        this.onGoingOrders = [];
        this.oldOrders = [];
        this.api.post('orders/getByStore', param).subscribe(function (data) {
            console.log('by store id', data);
            _this.dummy = [];
            if (data && data.status === 200 && data.data.length > 0) {
                data.data.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, info, selected, status;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(function (x) { try {
                                    JSON.parse(x);
                                    return true;
                                }
                                catch (e) {
                                    return false;
                                } })(element.orders)) return [3 /*break*/, 2];
                                element.orders = JSON.parse(element.orders);
                                element.date_time = moment(element.date_time).format('dddd, MMMM Do YYYY');
                                _a = element;
                                return [4 /*yield*/, element.orders.filter(function (x) { return x.store_id === localStorage.getItem('uid'); })];
                            case 1:
                                _a.orders = _b.sent();
                                if ((function (x) { try {
                                    JSON.parse(x);
                                    return true;
                                }
                                catch (e) {
                                    return false;
                                } })(element.status)) {
                                    info = JSON.parse(element.status);
                                    selected = info.filter(function (x) { return x.id === localStorage.getItem('uid'); });
                                    if (selected && selected.length) {
                                        element.orders.forEach(function (order) {
                                            console.log(element.id, '=>', order.variations);
                                            if (order.variations && order.variations !== '' && typeof order.variations === 'string') {
                                                console.log('strings', element.id);
                                                order.variations = JSON.parse(order.variations);
                                                console.log(order['variant']);
                                                if (order["variant"] === undefined) {
                                                    order['variant'] = 0;
                                                }
                                            }
                                        });
                                        status = selected[0].status;
                                        element['storeStatus'] = status;
                                        if (status === 'created') {
                                            this.newOrders.push(element);
                                        }
                                        else if (status === 'accepted' || status === 'picked' || status === 'ongoing') {
                                            this.onGoingOrders.push(element);
                                        }
                                        else if (status === 'rejected' || status === 'cancelled' || status === 'delivered' || status === 'refund') {
                                            this.oldOrders.push(element);
                                        }
                                    }
                                }
                                _b.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                if (haveRefresh) {
                    event.target.complete();
                }
            }
        }, function (error) {
            console.log(error);
            _this.dummy = [];
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    OrdersPage.prototype.getProfilePic = function (item) {
        return item && item.cover ? item.cover : 'assets/imgs/user.jpg';
    };
    OrdersPage.prototype.getCurrency = function () {
        // return this.util.getCurrecySymbol();
        return '$';
    };
    OrdersPage.prototype.doRefresh = function (event) {
        console.log(event);
        this.getOrders(event, true);
    };
    OrdersPage = __decorate([
        core_1.Component({
            selector: 'app-orders',
            templateUrl: './orders.page.html',
            styleUrls: ['./orders.page.scss']
        })
    ], OrdersPage);
    return OrdersPage;
}());
exports.OrdersPage = OrdersPage;
