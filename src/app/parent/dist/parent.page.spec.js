"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var parent_page_1 = require("./parent.page");
describe('ParentPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [parent_page_1.ParentPage],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(parent_page_1.ParentPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
