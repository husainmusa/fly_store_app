"use strict";
exports.__esModule = true;
var app_po_1 = require("./app.po");
describe('new App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AppPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getPageTitle()).toContain('Tab 1');
    });
});
