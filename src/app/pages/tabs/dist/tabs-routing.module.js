"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TabsPageRoutingModule = void 0;
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
var tabs_page_1 = require("./tabs.page");
var routes = [
    {
        path: 'tabs',
        component: tabs_page_1.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../orders/orders.module'); }).then(function (m) { return m.OrdersPageModule; }); }
            },
            {
                path: 'tab2',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../analytics/analytics.module'); }).then(function (m) { return m.AnalyticsPageModule; }); }
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('../account/account.module'); }).then(function (m) { return m.AccountPageModule; });
                        }
                    },
                    {
                        path: 'about',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('../about/about.module'); }).then(function (m) { return m.AboutPageModule; });
                        }
                    },
                    {
                        path: 'contacts',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('../contacts/contacts.module'); }).then(function (m) { return m.ContactsPageModule; });
                        }
                    },
                    {
                        path: 'products',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('../products/products.module'); }).then(function (m) { return m.ProductsPageModule; });
                        }
                    },
                    {
                        path: 'new-product',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('../new-product/new-product.module'); }).then(function (m) { return m.NewProductPageModule; });
                        }
                    },
                    {
                        path: 'languages',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('../languages/languages.module'); }).then(function (m) { return m.LanguagesPageModule; });
                        }
                    },
                    {
                        path: 'faqs',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('../faqs/faqs.module'); }).then(function (m) { return m.FaqsPageModule; });
                        }
                    },
                    {
                        path: 'help',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('../help/help.module'); }).then(function (m) { return m.HelpPageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
exports.TabsPageRoutingModule = TabsPageRoutingModule;
