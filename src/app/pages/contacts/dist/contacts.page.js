"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactsPage = void 0;
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
var sweetalert2_1 = require("sweetalert2");
var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, util, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.contact = {
            name: '',
            email: '',
            message: '',
            status: '0',
            date: moment().format('YYYY-MM-DD')
        };
        console.log('address-->>', this.util.general);
        if (this.util.general && this.util.general.address) {
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({
                address: this.util.general.address + ' ' + this.util.general.city + ' ' +
                    this.util.general.state + ' ' + this.util.general.country + ' ' + this.util.general.zip
            }, function (results, status) {
                console.log(results, status);
                if (status === 'OK' && results && results.length) {
                    _this.latOri = results[0].geometry.location.lat();
                    _this.longOri = results[0].geometry.location.lng();
                    _this.loadMap(_this.latOri, _this.longOri);
                }
            });
        }
    }
    ContactsPage.prototype.ngOnInit = function () {
    };
    ContactsPage.prototype.back = function () {
        this.navCtrl.back();
    };
    ContactsPage.prototype.loadMap = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: latLng,
            zoom: 12,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
            overviewMapControl: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            position: latLng
        });
        var sunCircle = {
            strokeColor: '#49befc',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#49befc',
            fillOpacity: 0.35,
            map: this.map,
            center: latLng
        };
        this.circle = new google.maps.Circle(sunCircle);
        this.circle.bindTo('center', marker, 'position');
    };
    ContactsPage.prototype.submit = function () {
        var _this = this;
        console.log('contact', this.contact);
        if (this.contact.name === '' || this.contact.email === '' || this.contact.message === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
        }
        var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailfilter.test(this.contact.email)) {
            this.util.errorToast(this.util.getString('Please enter valid email'));
            return false;
        }
        this.util.show();
        this.api.post('contacts/save', this.contact).subscribe(function (data) {
            _this.util.hide();
            var param = {
                email: _this.contact.email
            };
            _this.api.post('users/contactResponse', param).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            });
            _this.contact.email = '';
            _this.contact.name = '';
            _this.contact.message = '';
            if (data && data.status === 200) {
                _this.success();
            }
            else {
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            console.log(error);
            _this.util.hide();
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    ContactsPage.prototype.success = function () {
        var Toast = sweetalert2_1["default"].mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: function (toast) {
                toast.addEventListener('mouseenter', sweetalert2_1["default"].stopTimer);
                toast.addEventListener('mouseleave', sweetalert2_1["default"].resumeTimer);
            }
        });
        Toast.fire({
            icon: 'success',
            title: this.util.getString('message sent successfully')
        });
        this.navCtrl.back();
    };
    __decorate([
        core_1.ViewChild('map', { static: true })
    ], ContactsPage.prototype, "mapElement");
    ContactsPage = __decorate([
        core_1.Component({
            selector: 'app-contacts',
            templateUrl: './contacts.page.html',
            styleUrls: ['./contacts.page.scss']
        })
    ], ContactsPage);
    return ContactsPage;
}());
exports.ContactsPage = ContactsPage;
