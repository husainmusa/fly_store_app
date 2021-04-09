"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
// translate
var http_1 = require("@angular/common/http");
var pipe_module_1 = require("./pipes/pipe.module");
var category_module_1 = require("./pages/category/category.module");
var components_module_1 = require("./components/components.module");
var ngx_3 = require("@ionic-native/camera/ngx");
var ngx_4 = require("@ionic-native/file-transfer/ngx");
var ngx_5 = require("@ionic-native/http/ngx");
var ngx_6 = require("@ionic-native/onesignal/ngx");
var ngx_7 = require("@ionic-native/printer/ngx");
var select_drivers_module_1 = require("./pages/select-drivers/select-drivers.module");
var sub_category_module_1 = require("./pages/sub-category/sub-category.module");
var ngx_8 = require("@ionic-native/native-audio/ngx");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            entryComponents: [],
            imports: [
                platform_browser_1.BrowserModule,
                angular_1.IonicModule.forRoot(),
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                pipe_module_1.PipeModule,
                category_module_1.CategoryPageModule,
                sub_category_module_1.SubCategoryPageModule,
                select_drivers_module_1.SelectDriversPageModule,
                components_module_1.ComponentsModule,
            ],
            providers: [
                ngx_2.StatusBar,
                ngx_1.SplashScreen,
                ngx_3.Camera,
                ngx_4.FileTransferObject,
                ngx_5.HTTP,
                ngx_6.OneSignal,
                ngx_7.Printer,
                ngx_8.NativeAudio,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
