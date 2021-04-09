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
exports.EditProfilePage = void 0;
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
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(util, navCtrl, api, actionSheetController, camera) {
        this.util = util;
        this.navCtrl = navCtrl;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.name = '';
        this.address = '';
        this.descritions = '';
        this.time = '';
        this.openTime = '';
        this.closeTime = '';
        this.latitude = '';
        this.longitude = '';
        this.city = '';
        this.id = '';
        this.coverImage = '';
        this.edit_flag = true;
        this.id = localStorage.getItem('suid');
        this.getVenue();
    }
    EditProfilePage.prototype.ngOnInit = function () {
    };
    EditProfilePage.prototype.getVenue = function () {
        var _this = this;
        var param = {
            id: this.id
        };
        this.util.show();
        this.api.post('stores/getById', param).subscribe(function (datas) {
            console.log(datas);
            _this.util.hide();
            if (datas && datas.status === 200 && datas.data.length) {
                var info = datas.data[0];
                console.log('-------->', info);
                _this.name = info.name;
                _this.address = info.address;
                _this.latitude = info.lat;
                _this.longitude = info.lng;
                _this.coverImage = info.cover;
                _this.descritions = info.descriptions;
                _this.openTime = info.open_time;
                _this.closeTime = info.close_time;
                _this.mobile = info.mobile;
                _this.city = info.cid;
                _this.commission = info.commission;
            }
            else {
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            _this.util.hide();
            console.log(error);
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    EditProfilePage.prototype.update = function () {
        var _this = this;
        console.log(this.name, this.address, this.descritions, this.time, this.openTime, this.closeTime);
        if (this.name === '' || this.address === '' || this.descritions === '' || this.openTime === '' || this.closeTime === ''
            || !this.openTime || !this.closeTime) {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
        }
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ address: this.address }, function (results, status) {
            console.log(results, status);
            if (status === 'OK' && results && results.length) {
                _this.latitude = results[0].geometry.location.lat();
                _this.longitude = results[0].geometry.location.lng();
                console.log('----->', _this.latitude, _this.longitude);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
                return false;
            }
        });
        if (!this.coverImage || this.coverImage === '') {
            this.util.errorToast(this.util.getString('Please add your cover image'));
            return false;
        }
        var param = {
            name: this.name,
            address: this.address,
            descriptions: this.descritions,
            lat: this.latitude,
            lng: this.longitude,
            cover: this.coverImage,
            open_time: this.openTime,
            close_time: this.closeTime,
            cid: this.city,
            id: this.id,
            commission: this.commission,
            mobile: this.mobile
        };
        this.util.show();
        this.api.post('stores/editList', param).subscribe(function (datas) {
            console.log(datas);
            _this.util.hide();
            if (datas && datas.status === 200) {
                _this.navCtrl.back();
            }
            else {
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            _this.util.hide();
            console.log(error);
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    EditProfilePage.prototype.updateProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: this.util.getString('Choose from'),
                            buttons: [{
                                    text: this.util.getString('Camera'),
                                    icon: 'camera',
                                    handler: function () {
                                        console.log('camera clicked');
                                        _this.upload('camera');
                                    }
                                }, {
                                    text: this.util.getString('Gallery'),
                                    icon: 'images',
                                    handler: function () {
                                        console.log('gallery clicked');
                                        _this.upload('gallery');
                                    }
                                }, {
                                    text: this.util.getString('Cancel'),
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage.prototype.upload = function (type) {
        var _this = this;
        try {
            var options = {
                quality: 100,
                targetHeight: 800,
                targetWidth: 800,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: type === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (url) {
                console.log('url->', url);
                _this.util.show(_this.util.getString('uploading'));
                var alpha = {
                    img: url,
                    type: 'jpg'
                };
                console.log('parma==>', alpha);
                _this.api.nativePost('users/upload_file', alpha).then(function (data) {
                    _this.util.hide();
                    console.log('data', JSON.parse(data.data));
                    var info = JSON.parse(data.data);
                    _this.coverImage = info.data;
                    console.log('cover image', _this.coverImage);
                    var param = {
                        cover: _this.coverImage,
                        id: localStorage.getItem('uid')
                    };
                    _this.util.show(_this.util.getString('updating...'));
                    _this.api.post('users/edit_profile', param).subscribe(function (update) {
                        _this.util.hide();
                        console.log(update);
                    }, function (error) {
                        _this.util.hide();
                        console.log(error);
                    });
                }, function (error) {
                    console.log(error);
                    _this.util.hide();
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                })["catch"](function (error) {
                    console.log(error);
                    _this.util.hide();
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                });
            });
        }
        catch (error) {
            console.log('error', error);
        }
    };
    EditProfilePage.prototype.back = function () {
        this.navCtrl.back();
    };
    EditProfilePage = __decorate([
        core_1.Component({
            selector: 'app-edit-profile',
            templateUrl: './edit-profile.page.html',
            styleUrls: ['./edit-profile.page.scss']
        })
    ], EditProfilePage);
    return EditProfilePage;
}());
exports.EditProfilePage = EditProfilePage;
