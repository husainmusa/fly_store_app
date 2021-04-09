"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ParentPage = void 0;
var core_1 = require("@angular/core");
var ParentPage = /** @class */ (function () {
    function ParentPage(modalCtrl, api, util, navParam) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.util = util;
        this.navParam = navParam;
        this.parent = [];
        this.dummyParent = [];
        this.dummy = Array(20);
        this.name = [];
        this.getParent();
        this.selectedItems = this.navParam.get('id');
        console.log(this.id);
    }
    ParentPage.prototype.ngOnInit = function () {
        console.log("selected items is", this.selectedItems);
    };
    ParentPage.prototype.getParent = function () {
        var _this = this;
        var shopid = localStorage.getItem('uid');
        var param = {
            id: shopid,
            limit: 5000
        };
        this.api.post('products/getByStoreId', param).subscribe(function (data) {
            console.log(data);
            _this.dummy = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                for (var i = 0; i < data.data.length; i++) {
                    if (data.data[i].parent_id == "0" || data.data[i].parent_id == "") {
                        _this.parent.push(data.data[i]);
                        _this.dummyParent.push(data.data[i]);
                    }
                }
            }
            else {
                _this.util.errorToast(_this.util.getString('No Product found'));
            }
        }, function (error) {
            _this.util.errorToast(_this.util.getString('Something went wrong'));
            _this.dummy = [];
            console.log(error);
        });
    };
    ParentPage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    ParentPage.prototype.selected = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var item = this_1.parent.filter(function (x) { return x.id === _this.selectedItems[i]; });
            this_1.name.push(item[0].name);
        };
        var this_1 = this;
        for (var i = 0; i < this.selectedItems.length; i++) {
            _loop_1(i);
        }
        this.modalCtrl.dismiss({ id: this.selectedItems, name: this.name }, 'selected');
    };
    ParentPage.prototype.onSearchChange = function (event) {
        console.log(event.detail.value);
        this.parent = this.dummyParent.filter(function (ele) {
            return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
        });
    };
    ParentPage = __decorate([
        core_1.Component({
            selector: 'app-parent',
            templateUrl: './parent.page.html',
            styleUrls: ['./parent.page.scss']
        })
    ], ParentPage);
    return ParentPage;
}());
exports.ParentPage = ParentPage;
