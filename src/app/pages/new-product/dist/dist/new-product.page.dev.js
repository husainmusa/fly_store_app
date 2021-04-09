"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
exports.NewProductPage = void 0;
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

var category_page_1 = require("../category/category.page");

var sub_category_page_1 = require("../sub-category/sub-category.page");

var parent_page_1 = require("../../parent/parent.page");

var moment = require("moment");

var NewProductPage =
/** @class */
function () {
  function NewProductPage(route, navCtrl, modalCtrl, util, api, camera, fileTransfer, actionSheetCtrl, alertController) {
    var _this = this;

    this.route = route;
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    this.util = util;
    this.api = api;
    this.camera = camera;
    this.fileTransfer = fileTransfer;
    this.actionSheetCtrl = actionSheetCtrl;
    this.alertController = alertController;
    this.cateId = '';
    this.cateName = '';
    this.subId = '';
    this.subName = '';
    this.parentId = '';
    this.parentName = '';
    this.name = '';
    this.dummyName = [];
    this.realPrice = 0;
    this.sellPrice = 0;
    this.discount = 0;
    this.status = '1';
    this.coverImage = '';
    this.veg = true;
    this.have_gram = false;
    this.gram = '0';
    this.have_kg = false;
    this.kg = '0';
    this.have_pcs = false;
    this.pcs = '0';
    this.have_liter = false;
    this.liter = '0';
    this.have_ml = false;
    this.ml = '0';
    this.in_stoke = '1';
    this.in_offer = false;
    this.key_features = '';
    this.disclaimer = '';
    this.variations = [];
    this.size = false;
    this.route.queryParams.subscribe(function (data) {
      console.log('=>', data);

      if (data && data.id) {
        _this.isNew = false;
        _this.id = data.id;

        _this.getProduct();
      } else {
        _this.isNew = true;
      }

      console.log(_this.isNew);
    });
  }

  NewProductPage.prototype.back = function () {
    this.navCtrl.back();
  };

  NewProductPage.prototype.getProduct = function () {
    var _this = this;

    this.util.show();
    var param = {
      id: this.id
    };
    this.api.post('products/getById', param).subscribe(function (data) {
      console.log(data);

      _this.util.hide();

      if (data && data.status === 200 && data.data.length) {
        var info = data.data[0];
        console.log('product ->', info);
        _this.cateId = info.cate_id;
        _this.subId = info.sub_cate_id;
        _this.name = info.name;
        _this.description = info.descriptions;
        _this.coverImage = info.cover;
        _this.key_features = info.key_features;
        _this.disclaimer = info.disclaimer;
        _this.discount = info.discount;
        _this.exp_date = info.exp_date;
        _this.gram = info.gram;
        _this.have_gram = info.have_gram === '1' ? true : false;
        _this.kg = info.kg;
        _this.have_kg = info.have_kg === '1' ? true : false;
        _this.liter = info.liter;
        _this.have_liter = info.have_liter === '1' ? true : false;
        _this.ml = info.ml;
        _this.have_ml = info.have_ml === '1' ? true : false;
        _this.pcs = info.pcs;
        _this.have_pcs = info.have_pcs === '1' ? true : false;
        _this.in_offer = info.in_offer === '1' ? true : false;
        _this.in_stoke = info.in_stoke;
        _this.is_single = info.is_single === '1' ? true : false;
        _this.veg = info.kind === '1' ? true : false;
        _this.realPrice = parseFloat(info.original_price);
        _this.sellPrice = parseFloat(info.sell_price);
        _this.status = info.status;
        _this.parentId = info.parent_id.split(',');

        _this.getParent();

        _this.size = info && info.size && info.size === '1' ? true : false;

        if (info && info.variations && info.variations !== '') {
          if (function (x) {
            try {
              JSON.parse(x);
              return true;
            } catch (e) {
              return false;
            }
          }(info.variations)) {
            _this.variations = JSON.parse(info.variations);
          }
        }

        if (info.images) {
          var images = JSON.parse(info.images);
          console.log('images======>>>', images);

          if (images[0]) {
            _this.image1 = images[0];
          }

          if (images[1]) {
            _this.image2 = images[1];
          }

          if (images[2]) {
            _this.image3 = images[2];
          }

          if (images[3]) {
            _this.image4 = images[3];
          }

          if (images[4]) {
            _this.image5 = images[4];
          }

          if (images[5]) {
            _this.image6 = images[5];
          }
        }

        _this.api.get('categories').subscribe(function (cates) {
          console.log(cates);

          if (cates && cates.status === 200 && cates.data && cates.data.length) {
            console.log(cates.data);
            var name = cates.data.filter(function (x) {
              return x.id === _this.cateId;
            });
            console.log('cate name=-=====>>>', name);
            _this.cateName = name[0].name;
          } else {
            _this.util.errorToast(_this.util.getString('No category found'));
          }
        }, function (error) {
          _this.util.errorToast(_this.util.getString('Something went wrong'));

          console.log(error);
        });

        var subCate = {
          id: info.cate_id
        };

        _this.api.post('subcate/getByCId', subCate).subscribe(function (sub) {
          console.log(sub);

          if (sub && sub.status === 200 && sub.data && sub.data.length) {
            // this.category = sub.data;
            console.log(sub);
            var name = sub.data.filter(function (x) {
              return x.id === _this.subId;
            });
            console.log('cate name=-=====>>>', name);
            _this.subName = name[0].name;
          } else {
            _this.util.errorToast(_this.util.getString('No category found'));
          }
        }, function (error) {
          _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
      }
    }, function (error) {
      _this.util.hide();

      _this.util.errorToast(_this.util.getString('Something went wrong'));

      console.log(error);
    });
  };

  NewProductPage.prototype.getParent = function () {
    var _this = this;

    var shopid = localStorage.getItem('uid');
    var param = {
      id: shopid,
      limit: 5000
    };
    this.api.post('products/getByStoreId', param).subscribe(function (data) {
      if (data && data.status === 200 && data.data && data.data.length) {
        var _loop_1 = function _loop_1(i) {
          var item = data.data.filter(function (x) {
            return x.id === _this.parentId[i];
          });

          _this.dummyName.push(item[0].name);
        };

        for (var i = 0; i < _this.parentId.length; i++) {
          _loop_1(i);
        }

        _this.parentName = _this.dummyName.join(',');
      }
    });
  };

  NewProductPage.prototype.ngOnInit = function () {};

  NewProductPage.prototype.openCate = function () {
    return __awaiter(this, void 0, void 0, function () {
      var modal;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.modalCtrl.create({
              component: category_page_1.CategoryPage,
              componentProps: {
                id: this.cateId
              }
            })];

          case 1:
            modal = _a.sent();
            modal.present();
            modal.onDidDismiss().then(function (data) {
              console.log(data);

              if (data && data.data && data.role === 'selected') {
                _this.cateId = data.data.id;
                _this.cateName = data.data.name;
              }
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  NewProductPage.prototype.openSub = function () {
    return __awaiter(this, void 0, void 0, function () {
      var modal;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(this.cateId && this.cateName)) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.modalCtrl.create({
              component: sub_category_page_1.SubCategoryPage,
              componentProps: {
                cateId: this.cateId,
                subId: this.subId
              }
            })];

          case 1:
            modal = _a.sent();
            modal.present();
            modal.onDidDismiss().then(function (data) {
              console.log(data);

              if (data && data.data && data.role === 'selected') {
                _this.subId = data.data.id;
                _this.subName = data.data.name;
              }
            });
            return [3
            /*break*/
            , 3];

          case 2:
            this.util.errorToast(this.util.getString('Please select category'));
            _a.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  NewProductPage.prototype.openParent = function () {
    return __awaiter(this, void 0, void 0, function () {
      var modal;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.modalCtrl.create({
              component: parent_page_1.ParentPage,
              componentProps: {
                id: this.parentId
              }
            })];

          case 1:
            modal = _a.sent();
            modal.present();
            modal.onDidDismiss().then(function (data) {
              console.log(data, "parent dismissed data");

              if (data && data.data && data.role === 'selected') {
                _this.parentId = data.data.id;
                _this.parentName = data.data.name.join(',');
              }
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  NewProductPage.prototype.onDicount = function (value) {
    console.log(value);

    if (this.realPrice && value <= 99) {
      this.percentage(this.discount, this.realPrice);
    }
  };

  NewProductPage.prototype.onRealPrice = function (value) {
    console.log(value);

    if (this.sellPrice && value > 1) {
      this.percentage(this.discount, this.realPrice);
    }
  };

  NewProductPage.prototype.percentage = function (percent, total) {
    this.sellPrice = 0;
    var price = percent / 100 * total;
    this.sellPrice = this.realPrice - price;
  };

  NewProductPage.prototype.create = function () {
    var _this = this;

    var image = [this.image1 ? this.image1 : '', this.image2 ? this.image2 : '', this.image3 ? this.image3 : '', this.image4 ? this.image4 : '', this.image5 ? this.image5 : '', this.image6 ? this.image6 : ''];
    var param = {
      store_id: localStorage.getItem('uid'),
      parent_id: this.parentId ? this.parentId.toString() : 0,
      cover: this.coverImage,
      name: this.name,
      images: JSON.stringify(image),
      original_price: this.realPrice,
      sell_price: this.sellPrice ? this.sellPrice : 0,
      discount: this.discount ? this.discount : 0,
      kind: this.veg ? 1 : 0,
      cate_id: this.cateId,
      sub_cate_id: this.subId,
      have_gram: this.have_gram ? 1 : 0,
      gram: this.have_gram ? this.gram : 0,
      have_kg: this.have_kg ? 1 : 0,
      kg: this.have_kg ? this.kg : 0,
      have_pcs: this.have_pcs ? 1 : 0,
      pcs: this.have_pcs ? this.pcs : 0,
      have_liter: this.have_liter ? 1 : 0,
      liter: this.have_liter ? this.liter : 0,
      have_ml: this.have_ml ? 1 : 0,
      ml: this.have_ml ? this.ml : 0,
      descriptions: this.description,
      exp_date: moment(this.exp_date).format('YYYY-MM-DD'),
      type_of: 1,
      in_stoke: this.in_stoke,
      status: this.status,
      in_offer: this.in_offer ? 1 : 0,
      key_features: this.key_features,
      disclaimer: this.disclaimer,
      is_single: this.is_single,
      in_home: 0,
      rating: 0,
      total_rating: 0,
      size: this.size === true ? 1 : 0,
      variations: JSON.stringify(this.variations)
    };
    console.log('*****', param);
    this.util.show();
    this.api.post('products/save', param).subscribe(function (data) {
      console.log(data);

      _this.util.hide();

      if (data && data.status === 200) {
        _this.util.showToast(_this.util.getString('Product added successfully'), 'success', 'bottom');

        _this.navCtrl.back();
      } else {
        _this.util.errorToast(_this.util.getString('Something went wrong'));
      }
    }, function (error) {
      _this.util.hide();

      _this.util.errorToast(_this.util.getString('Something went wrong'));

      console.log('error', error);
    });
  };

  NewProductPage.prototype.submit = function () {
    console.log('size-->>', this.size);
    console.log('submited', this.veg);

    if (!this.cateId || this.cateId === '') {
      this.util.errorToast(this.util.getString('Please select category'));
      return false;
    }

    if (!this.subId || this.subId === '') {
      this.util.errorToast(this.util.getString('Please select sub category'));
      return false;
    }

    if (!this.realPrice || this.realPrice === '') {
      this.util.errorToast(this.util.getString('Please enter product price'));
      return false;
    }

    if (!this.description || this.description === '') {
      this.util.errorToast(this.util.getString('Please enter product description'));
      return false;
    }

    if (!this.name || this.name === '') {
      this.util.errorToast(this.util.getString('Please enter product name'));
      return false;
    }

    if (!this.coverImage || this.coverImage === '') {
      this.util.errorToast(this.util.getString('Please add product image'));
      return false;
    }

    if (!this.exp_date || this.exp_date === '') {
      this.util.errorToast(this.util.getString('Please product expire date'));
      return false;
    }

    if (this.isNew) {
      console.log('new');
      this.create();
    } else {
      console.log('update');
      this.update();
    }
  };

  NewProductPage.prototype.update = function () {
    var _this = this;

    var image = [this.image1 ? this.image1 : '', this.image2 ? this.image2 : '', this.image3 ? this.image3 : '', this.image4 ? this.image4 : '', this.image5 ? this.image5 : '', this.image6 ? this.image6 : ''];
    var param = {
      id: this.id,
      store_id: localStorage.getItem('uid'),
      parent_id: this.parentId ? this.parentId.toString() : 0,
      cover: this.coverImage,
      name: this.name,
      images: JSON.stringify(image),
      original_price: this.realPrice,
      sell_price: this.sellPrice ? this.sellPrice : 0,
      discount: this.discount ? this.discount : 0,
      kind: this.veg ? 1 : 0,
      cate_id: this.cateId,
      sub_cate_id: this.subId,
      have_gram: this.have_gram ? 1 : 0,
      gram: this.have_gram ? this.gram : 0,
      have_kg: this.have_kg ? 1 : 0,
      kg: this.have_kg ? this.kg : 0,
      have_pcs: this.have_pcs ? 1 : 0,
      pcs: this.have_pcs ? this.pcs : 0,
      have_liter: this.have_liter ? 1 : 0,
      liter: this.have_liter ? this.liter : 0,
      have_ml: this.have_ml ? 1 : 0,
      ml: this.have_ml ? this.ml : 0,
      descriptions: this.description,
      exp_date: moment(this.exp_date).format('YYYY-MM-DD'),
      type_of: 1,
      in_stoke: this.in_stoke,
      status: this.status,
      in_offer: this.in_offer ? 1 : 0,
      key_features: this.key_features,
      disclaimer: this.disclaimer,
      is_single: this.is_single,
      size: this.size === true ? 1 : 0,
      variations: JSON.stringify(this.variations)
    };
    console.log('*****', param);
    this.util.show();
    this.api.post('products/editList', param).subscribe(function (data) {
      console.log(data);

      _this.util.hide();

      if (data && data.status === 200) {
        _this.util.showToast(_this.util.getString('Product updated successfully'), 'success', 'bottom');

        _this.navCtrl.back();
      } else {
        _this.util.errorToast(_this.util.getString('Something went wrong'));
      }
    }, function (error) {
      _this.util.hide();

      _this.util.errorToast(_this.util.getString('Something went wrong'));

      console.log('error', error);
    });
  };

  NewProductPage.prototype.minStartDate = function () {
    return moment().format('YYYY-MM-DD');
  };

  NewProductPage.prototype.getMaxDate = function () {
    return moment().add('5', 'years').format('YYYY-MM-DD');
  };

  NewProductPage.prototype.minEndDate = function () {
    return moment().add(1, 'day').format('YYYY-MM-DD');
  };

  NewProductPage.prototype.cover = function () {
    return __awaiter(this, void 0, void 0, function () {
      var actionSheet;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.actionSheetCtrl.create({
              mode: 'md',
              buttons: [{
                text: this.util.getString('Camera'),
                role: 'camera',
                icon: 'camera',
                handler: function handler() {
                  console.log('Camera clicked');

                  _this.upload('camera');
                }
              }, {
                text: this.util.getString('Gallery'),
                role: 'gallery',
                icon: 'image',
                handler: function handler() {
                  console.log('Gallery clicked');

                  _this.upload('gallery');
                }
              }, {
                text: this.util.getString('Cancel'),
                role: 'cancel',
                icon: 'close',
                handler: function handler() {
                  console.log('Cancel clicked');
                }
              }]
            })];

          case 1:
            actionSheet = _a.sent();
            return [4
            /*yield*/
            , actionSheet.present()];

          case 2:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  NewProductPage.prototype.upload = function (type) {
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

        _this.util.show();

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
    } catch (error) {
      console.log('error', error);
    }
  };

  NewProductPage.prototype.uploadExtra = function (type, num) {
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

        _this.util.show();

        var alpha = {
          img: url,
          type: 'jpg'
        };
        console.log('parma==>', alpha);

        _this.api.nativePost('users/upload_file', alpha).then(function (data) {
          _this.util.hide();

          console.log('data', JSON.parse(data.data));
          var info = JSON.parse(data.data); // this.coverImage = info.data;
          // console.log('cover image', this.coverImage);

          if (num === 1 || num === '1') {
            _this.image1 = info.data;
          }

          if (num === 2 || num === '2') {
            _this.image2 = info.data;
          }

          if (num === 3 || num === '3') {
            _this.image3 = info.data;
          }

          if (num === 4 || num === '4') {
            _this.image4 = info.data;
          }

          if (num === 5 || num === '5') {
            _this.image5 = info.data;
          }

          if (num === 6 || num === '6') {
            _this.image6 = info.data;
          }
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
    } catch (error) {
      console.log('error', error);
    }
  };

  NewProductPage.prototype.others = function (num) {
    return __awaiter(this, void 0, void 0, function () {
      var actionSheet;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            console.log('num', num);
            return [4
            /*yield*/
            , this.actionSheetCtrl.create({
              mode: 'md',
              buttons: [{
                text: this.util.getString('Camera'),
                role: 'camera',
                icon: 'camera',
                handler: function handler() {
                  console.log('Camera clicked');

                  _this.uploadExtra('camera', num);
                }
              }, {
                text: this.util.getString('Gallery'),
                role: 'gallery',
                icon: 'image',
                handler: function handler() {
                  console.log('Gallery clicked');

                  _this.uploadExtra('gallery', num);
                }
              }, {
                text: this.util.getString('Cancel'),
                role: 'cancel',
                icon: 'close',
                handler: function handler() {
                  console.log('Cancel clicked');
                }
              }]
            })];

          case 1:
            actionSheet = _a.sent();
            return [4
            /*yield*/
            , actionSheet.present()];

          case 2:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  NewProductPage.prototype.changeSize = function (event) {
    console.log(event);

    if (event && event.detail && event.detail.checked) {
      var items = this.variations.filter(function (x) {
        return x.title === 'size';
      });
      console.log('length', items);

      if (!items.length) {
        var item = {
          title: 'size',
          type: 'radio',
          items: []
        };
        this.variations.push(item);
        console.log(this.variations);
      }
    } else {
      this.variations = this.variations.filter(function (x) {
        return x.title !== 'size';
      });
    }
  };

  NewProductPage.prototype.editTitle = function (index) {
    return __awaiter(this, void 0, void 0, function () {
      var alert;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.alertController.create({
              header: 'Edit title!',
              inputs: [{
                name: 'name',
                type: 'text',
                placeholder: 'Title',
                value: this.variations[index].title
              }],
              buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: function handler() {
                  console.log('Confirm Cancel');
                }
              }, {
                text: 'Ok',
                handler: function handler(data) {
                  console.log('Confirm Ok');

                  if (data && data.name) {
                    _this.variations[index].title = data.name;
                  }
                }
              }]
            })];

          case 1:
            alert = _a.sent();
            return [4
            /*yield*/
            , alert.present()];

          case 2:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  NewProductPage.prototype.addItem = function (index) {
    return __awaiter(this, void 0, void 0, function () {
      var alert;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            console.log(this.variations[index]);
            return [4
            /*yield*/
            , this.alertController.create({
              header: 'Add item to ' + this.variations[index].title,
              inputs: [{
                name: 'title',
                type: 'text',
                placeholder: 'Add-ons name'
              }, {
                name: 'price',
                type: 'number',
                placeholder: 'Add-ons price'
              }, {
                name: 'discount',
                type: 'number',
                placeholder: 'Add-ons discount'
              }],
              buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: function handler() {
                  console.log('Confirm Cancel');
                }
              }, {
                text: 'Ok',
                handler: function handler(data) {
                  console.log('Confirm Ok');

                  if (data && data.title && data.price) {
                    var item = {
                      title: data.title,
                      price: parseFloat(data.price),
                      discount: data && data.discount ? parseFloat(data.discount) : 0
                    };

                    _this.variations[index].items.push(item);

                    console.log(_this.variations);
                  }
                }
              }]
            })];

          case 1:
            alert = _a.sent();
            return [4
            /*yield*/
            , alert.present()];

          case 2:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  NewProductPage.prototype["delete"] = function (item) {
    console.log(item);

    if (item.title === 'size') {
      this.size = false;
    }

    this.variations = this.variations.filter(function (x) {
      return x.title !== item.title;
    });
  };

  NewProductPage.prototype.deleteSub = function (index, item) {
    console.log(index);
    console.log(item);
    var selected = this.variations[index].items;
    console.log('selected', selected);
    var data = selected.filter(function (x) {
      return x.title !== item.title;
    });
    console.log(data);
    this.variations[index].items = data;
    console.log('done', this.variations);
  };

  NewProductPage.prototype.editSub = function (index, items, subIndex) {
    return __awaiter(this, void 0, void 0, function () {
      var alert;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            console.log(index, items, subIndex);
            console.log(this.variations);
            console.log('update ir', this.variations[index].items[subIndex].discount);
            return [4
            /*yield*/
            , this.alertController.create({
              header: 'Edit item ' + this.variations[index].title,
              inputs: [{
                name: 'title',
                type: 'text',
                placeholder: 'Variation name',
                value: this.variations[index].items[subIndex].title
              }, {
                name: 'price',
                type: 'number',
                placeholder: 'Variation price',
                value: this.variations[index].items[subIndex].price
              }, {
                name: 'discount',
                type: 'number',
                placeholder: 'Variation discount',
                value: this.variations[index].items[subIndex].discount
              }],
              buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: function handler() {
                  console.log('Confirm Cancel');
                }
              }, {
                text: 'Ok',
                handler: function handler(data) {
                  console.log('data', data);
                  console.log('Confirm Ok', _this.variations[index].items[subIndex].discount);
                  _this.variations[index].items[subIndex].title = data.title;
                  _this.variations[index].items[subIndex].price = parseFloat(data.price);
                  _this.variations[index].items[subIndex].discount = data && data.discount ? parseFloat(data.discount) : 0;
                  console.log(_this.variations);
                }
              }]
            })];

          case 1:
            alert = _a.sent();
            return [4
            /*yield*/
            , alert.present()];

          case 2:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  NewProductPage = __decorate([core_1.Component({
    selector: 'app-new-product',
    templateUrl: './new-product.page.html',
    styleUrls: ['./new-product.page.scss']
  })], NewProductPage);
  return NewProductPage;
}();

exports.NewProductPage = NewProductPage;