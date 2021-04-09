"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsPage = void 0;
var core_1 = require("@angular/core");
var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, router, api, util) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.api = api;
        this.util = util;
        this.products = [];
        this.dummy = Array(20);
        this.dummyProducts = [];
    }
    ProductsPage.prototype.ionViewWillEnter = function () {
        this.getProducts();
    };
    ProductsPage.prototype.ngOnInit = function () {
    };
    ProductsPage.prototype.getProducts = function () {
        var _this = this;
        var param = {
            id: localStorage.getItem('uid'),
            limit: 5000
        };
        this.api.post('products/getByStoreId', param).subscribe(function (data) {
            console.log(data);
            _this.dummy = [];
            if (data && data.status === 200) {
                _this.products = data.data;
                _this.dummyProducts = data.data;
            }
        }, function (error) {
            console.log(error);
            _this.util.errorToast(_this.util.getString('Something went wrong'));
            _this.dummy = [];
        });
    };
    ProductsPage.prototype.back = function () {
        this.router.navigate(['tabs/tab3']);
    };
    ProductsPage.prototype.onSearchChange = function (event) {
        console.log(event.detail.value);
        this.products = this.dummyProducts.filter(function (ele) {
            return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
        });
    };
    ProductsPage.prototype.viewProduct = function (item) {
        var param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['tabs/tab3/new-product'], param);
    };
    ProductsPage.prototype.createNew = function () {
        console.log('createnew');
        this.router.navigate(['tabs/tab3/new-product']);
    };
    ProductsPage = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.page.html',
            styleUrls: ['./products.page.scss']
        })
    ], ProductsPage);
    return ProductsPage;
}());
exports.ProductsPage = ProductsPage;
