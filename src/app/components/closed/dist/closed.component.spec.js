"use strict";
exports.__esModule = true;
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var closed_component_1 = require("./closed.component");
describe('ClosedComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [closed_component_1.ClosedComponent],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(closed_component_1.ClosedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
