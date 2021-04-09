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
exports.AnalyticsPage = void 0;
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
var AnalyticsPage = /** @class */ (function () {
    function AnalyticsPage(util, api, printService) {
        this.util = util;
        this.api = api;
        this.printService = printService;
        this.allOrders = [];
        this.storeOrder = [];
        this.totalAmount = 0;
        this.commisionAmount = 0;
        this.toPay = 0;
        this.totalAmountsFromOrder = 0;
    }
    AnalyticsPage.prototype.ngOnInit = function () {
    };
    AnalyticsPage.prototype.getStats = function () {
        var _this = this;
        this.storename = this.util.store.name;
        this.storecommission = parseFloat(this.util.store.commission);
        if (this.from && this.to) {
            this.from = moment(this.from).format('YYYY-MM-DD');
            this.to = moment(this.to).format('YYYY-MM-DD');
            var param = {
                sid: localStorage.getItem('uid'),
                start: this.from + ' 00:00:00',
                end: this.to + ' 23:59:59'
            };
            console.log(param);
            this.util.show();
            this.apiCalled = false;
            this.storeOrder = [];
            this.api.post('orders/storeStats', param).subscribe(function (data) {
                _this.apiCalled = true;
                _this.util.hide();
                console.log(data);
                // if (data && data.status === 200 && data.data.length) {
                //   data.data.forEach(element => {
                //     element.orders = JSON.parse(element.orders);
                //     element.date_time = moment(element.date_time).format('YYYY-MM-DD');
                //   });
                //   let total = 0;
                //   data.data.forEach(async (element) => {
                //     element.orders = await element.orders.filter(x => x.store_id === localStorage.getItem('uid'));
                //     const info = JSON.parse(element.status);
                //     await element.orders.forEach(calc => {
                //       if (calc.sell_price === '0.00') {
                //         total = total + parseFloat(calc.original_price);
                //       } else {
                //         total = total + parseFloat(calc.sell_price);
                //       }
                //     });
                //     const selected = await info.filter(x => x.id === localStorage.getItem('uid'));
                //     if (selected && selected.length) {
                //       if (selected[0].status === 'delivered') {
                //         this.storeOrder.push(element);
                //       }
                //     }
                //   });
                //   setTimeout(() => {
                //     function percentage(num, per) {
                //       return (num / 100) * per;
                //     }
                //     console.log(this.storeOrder);
                //     console.log(total, this.storecommission);
                //     const totalPrice = percentage(total, parseFloat(this.storecommission));
                //     console.log('commistion=====>>>>>', totalPrice.toFixed(2));
                //     this.commisionAmount = totalPrice.toFixed(2);
                //     this.totalAmount = total;
                //     this.toPay = this.commisionAmount;
                //   }, 1000);
                // }
                if (data && data.status === 200 && data.data.length) {
                    var total_1 = 0;
                    data.data.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, info, selected;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(function (x) { try {
                                        JSON.parse(x);
                                        return true;
                                    }
                                    catch (e) {
                                        return false;
                                    } })(element.orders)) return [3 /*break*/, 4];
                                    element.orders = JSON.parse(element.orders);
                                    element.date_time = moment(element.date_time).format('dddd, MMMM Do YYYY');
                                    _a = element;
                                    return [4 /*yield*/, element.orders.filter(function (x) { return x.store_id === localStorage.getItem('uid'); })];
                                case 1:
                                    _a.orders = _b.sent();
                                    if (!(function (x) { try {
                                        JSON.parse(x);
                                        return true;
                                    }
                                    catch (e) {
                                        return false;
                                    } })(element.status)) return [3 /*break*/, 4];
                                    info = JSON.parse(element.status);
                                    return [4 /*yield*/, element.orders.forEach(function (calc) {
                                            if (calc.variations && calc.variations !== '' && typeof calc.variations === 'string') {
                                                console.log('strings', calc.id);
                                                calc.variations = JSON.parse(calc.variations);
                                                console.log(calc['variant']);
                                                if (calc["variant"] === undefined) {
                                                    calc['variant'] = 0;
                                                }
                                            }
                                            if (calc && calc.discount === '0') {
                                                if (calc.size === '1' || calc.size === 1) {
                                                    if (calc.variations[0].calc[calc.variant].discount && calc.variations[0].items[calc.variant].discount !== 0) {
                                                        total_1 = total_1 + (parseFloat(calc.variations[0].items[calc.variant].discount) * calc.quantiy);
                                                    }
                                                    else {
                                                        total_1 = total_1 + (parseFloat(calc.variations[0].items[calc.variant].price) * calc.quantiy);
                                                    }
                                                }
                                                else {
                                                    total_1 = total_1 + (parseFloat(calc.original_price) * calc.quantiy);
                                                }
                                            }
                                            else {
                                                if (calc.size === '1' || calc.size === 1) {
                                                    if (calc.variations[0].items[calc.variant].discount && calc.variations[0].items[calc.variant].discount !== 0) {
                                                        total_1 = total_1 + (parseFloat(calc.variations[0].items[calc.variant].discount) * calc.quantiy);
                                                    }
                                                    else {
                                                        total_1 = total_1 + (parseFloat(calc.variations[0].items[calc.variant].price) * calc.quantiy);
                                                    }
                                                }
                                                else {
                                                    total_1 = total_1 + (parseFloat(calc.sell_price) * calc.quantiy);
                                                }
                                            }
                                        })];
                                case 2:
                                    _b.sent();
                                    return [4 /*yield*/, info.filter(function (x) { return x.id === localStorage.getItem('uid'); })];
                                case 3:
                                    selected = _b.sent();
                                    if (selected && selected.length) {
                                        if (selected[0].status === 'delivered') {
                                            this.storeOrder.push(element);
                                        }
                                    }
                                    _b.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    setTimeout(function () {
                        function percentage(num, per) {
                            return (num / 100) * per;
                        }
                        console.log(_this.storeOrder);
                        console.log(total_1, _this.storecommission);
                        var totalPrice = percentage(total_1, parseFloat(_this.storecommission));
                        console.log('commistion=====>>>>>', totalPrice.toFixed(2));
                        _this.commisionAmount = totalPrice.toFixed(2);
                        _this.totalAmount = total_1;
                        _this.toPay = _this.commisionAmount;
                    }, 1000);
                }
            }, function (error) {
                _this.util.hide();
                console.log(error);
                _this.apiCalled = true;
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            });
        }
        else {
            this.util.errorToast(this.util.getString('All Fields are required'));
        }
    };
    AnalyticsPage.prototype.print = function () {
        var content = this.invoiceTicket.nativeElement.innerHTML;
        console.log('content', content);
        var options = {
            name: 'Groceryee App Summary',
            duplex: false
        };
        this.printService.print(content, options).then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    AnalyticsPage.prototype.today = function () {
        return moment().format('ll');
    };
    AnalyticsPage.prototype.getDate = function (date) {
        return moment(date).format('ll');
    };
    AnalyticsPage.prototype.getCommisions = function (total) {
        return ((parseFloat(total) * this.storecommission) / 100).toFixed(2);
    };
    __decorate([
        core_1.ViewChild('invoiceTicket', { read: core_1.ElementRef })
    ], AnalyticsPage.prototype, "invoiceTicket");
    AnalyticsPage = __decorate([
        core_1.Component({
            selector: 'app-analytics',
            templateUrl: './analytics.page.html',
            styleUrls: ['./analytics.page.scss']
        })
    ], AnalyticsPage);
    return AnalyticsPage;
}());
exports.AnalyticsPage = AnalyticsPage;
