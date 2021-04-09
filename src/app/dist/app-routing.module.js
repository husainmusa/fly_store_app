"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
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
var router_1 = require("@angular/router");
var auth_guard_1 = require("./guard/auth.guard");
var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/tabs/tabs.module'); }).then(function (m) { return m.TabsPageModule; }); },
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'orders',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/orders/orders.module'); }).then(function (m) { return m.OrdersPageModule; }); }
    },
    {
        path: 'account',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/account/account.module'); }).then(function (m) { return m.AccountPageModule; }); }
    },
    {
        path: 'forgot',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/forgot/forgot.module'); }).then(function (m) { return m.ForgotPageModule; }); }
    },
    {
        path: 'inbox',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/inbox/inbox.module'); }).then(function (m) { return m.InboxPageModule; }); }
    },
    {
        path: 'languages',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/languages/languages.module'); }).then(function (m) { return m.LanguagesPageModule; }); }
    },
    {
        path: 'about',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/about/about.module'); }).then(function (m) { return m.AboutPageModule; }); }
    },
    {
        path: 'analytics',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/analytics/analytics.module'); }).then(function (m) { return m.AnalyticsPageModule; }); }
    },
    {
        path: 'products',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/products/products.module'); }).then(function (m) { return m.ProductsPageModule; }); }
    },
    {
        path: 'edit-profile',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/edit-profile/edit-profile.module'); }).then(function (m) { return m.EditProfilePageModule; }); }
    },
    {
        path: 'reviews',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/reviews/reviews.module'); }).then(function (m) { return m.ReviewsPageModule; }); }
    },
    {
        path: 'new-product',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/new-product/new-product.module'); }).then(function (m) { return m.NewProductPageModule; }); }
    },
    {
        path: 'category',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/category/category.module'); }).then(function (m) { return m.CategoryPageModule; }); }
    },
    {
        path: 'sub-category',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/sub-category/sub-category.module'); }).then(function (m) { return m.SubCategoryPageModule; }); }
    },
    {
        path: 'order-detail',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/order-detail/order-detail.module'); }).then(function (m) { return m.OrderDetailPageModule; }); }
    },
    {
        path: 'select-drivers',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/select-drivers/select-drivers.module'); }).then(function (m) { return m.SelectDriversPageModule; }); }
    },
    {
        path: 'chats',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/chats/chats.module'); }).then(function (m) { return m.ChatsPageModule; }); }
    },
    {
        path: 'faqs',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/faqs/faqs.module'); }).then(function (m) { return m.FaqsPageModule; }); }
    },
    {
        path: 'help',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/help/help.module'); }).then(function (m) { return m.HelpPageModule; }); }
    },
    {
        path: 'parent',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./parent/parent.module'); }).then(function (m) { return m.ParentPageModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
