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
exports.OrderDetailPage = void 0;

var core_1 = require("@angular/core");

var moment = require("moment");

var OrderDetailPage =
/** @class */
function () {
  function OrderDetailPage(route, navCtrl, util, api, modalController, printer) {
    var _this = this;

    this.route = route;
    this.navCtrl = navCtrl;
    this.util = util;
    this.api = api;
    this.modalController = modalController;
    this.printer = printer;
    this.orderDetail = [];
    this.orders = [];
    this.drivers = [];
    this.dummyDrivers = [];
    this.assignee = [];
    this.assigneeDriver = [];
    this.orderStatus = [];
    this.statusText = '';
    this.orderString = [];
    this.route.queryParams.subscribe(function (data) {
      console.log(data);

      if (data && data.id) {
        _this.id = data.id;
        _this.loaded = false;

        _this.getOrder();

        console.log('store=-============---=-=0-=-=-=-', _this.util.store);

        if (_this.util.store && _this.util.store.name) {
          _this.statusText = ' by ' + _this.util.store.name;
        }
      } else {
        _this.navCtrl.back();
      }
    });
  }

  OrderDetailPage.prototype.degreesToRadians = function (degrees) {
    return degrees * Math.PI / 180;
  };

  OrderDetailPage.prototype.distanceInKmBetweenEarthCoordinates = function (lat1, lon1, lat2, lon2) {
    console.log(lat1, lon1, lat2, lon2);
    var earthRadiusKm = 6371;
    var dLat = this.degreesToRadians(lat2 - lat1);
    var dLon = this.degreesToRadians(lon2 - lon1);
    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  };

  OrderDetailPage.prototype.getDrivers = function () {
    var _this = this;

    if (this.util.store && this.util.store.cid) {
      var param = {
        id: this.util.store.cid
      };
      this.api.post('drivers/geyByCity', param).subscribe(function (data) {
        console.log('driver data--------------->>', data);

        if (data && data.status === 200 && data.data.length) {
          var info = data.data.filter(function (x) {
            return x.status === '1';
          });
          info.forEach(function (element) {
            return __awaiter(_this, void 0, void 0, function () {
              var distance;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , this.distanceInKmBetweenEarthCoordinates(this.userLat, this.userLng, parseFloat(element.lat), parseFloat(element.lng))];

                  case 1:
                    distance = _a.sent();
                    console.log('distance---------->>', distance);

                    if (distance < 50 && element.current === 'active' && element.status === '1') {
                      this.dummyDrivers.push(element);
                    }

                    console.log('dummtasedr', this.dummyDrivers);
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });
        }
      }, function (error) {
        console.log(error);

        _this.util.errorToast(_this.util.getString('Something went wrong'));
      });
    }
  };

  OrderDetailPage.prototype.getOrder = function () {
    var _this = this;

    var param = {
      id: this.id
    };
    this.api.post('orders/getById', param).subscribe(function (data) {
      console.log(data);
      _this.loaded = true;

      if (data && data.status === 200 && data.data.length > 0) {
        var info = data.data[0];
        console.log(info);
        _this.orderDetail = JSON.parse(info.notes);
        var order = JSON.parse(info.orders);
        _this.orders = order.filter(function (x) {
          return x.store_id === localStorage.getItem('uid');
        });
        console.log('order=====>>', _this.orders); // this.grandTotal = 0;

        var total_1 = 0;

        _this.orders.forEach(function (element) {
          var price = 0;

          if (element.variations && element.variations !== '' && typeof element.variations === 'string') {
            console.log('strings', element.id);
            element.variations = JSON.parse(element.variations);
            console.log(element['variant']);

            if (element["variant"] === undefined) {
              element['variant'] = 0;
            }
          }

          if (element && element.discount === '0') {
            if (element.size === '1' || element.size === 1) {
              if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                price = price + parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy;
              } else {
                price = price + parseFloat(element.variations[0].items[element.variant].price) * element.quantiy;
              }
            } else {
              price = price + parseFloat(element.original_price) * element.quantiy;
            }
          } else {
            if (element.size === '1' || element.size === 1) {
              if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                price = price + parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy;
              } else {
                price = price + parseFloat(element.variations[0].items[element.variant].price) * element.quantiy;
              }
            } else {
              price = price + parseFloat(element.sell_price) * element.quantiy;
            }
          }

          console.log('PRICEEE-->', price); // const price = element.sell_price === '0.00' ? parseFloat(element.original_price) : parseFloat(element.sell_price);

          var items = '<div style="border-bottom:1px dashed lightgray;display:flex;flex-direction:row;justify-content:space-between;"> <p style="font-weight:bold">' + element.name + ' X ' + element.quantiy + '</p> <p style="font-weight:bold">' + price + _this.util.currecny + ' </p>  </div>';

          _this.orderString.push(items);

          console.log(total_1, price);
          total_1 = total_1 + price;
        });

        console.log('==>', total_1);
        _this.grandTotal = total_1.toFixed(2);
        var storesStatus = JSON.parse(info.status);
        console.log('------------------', storesStatus);
        _this.orderStatus = storesStatus;
        var current = storesStatus.filter(function (x) {
          return x.id === localStorage.getItem('uid');
        });
        console.log('*************************', current);

        if (current && current.length) {
          _this.status = current[0].status;
        }

        _this.datetime = moment(info.date_time).format('dddd, MMMM Do YYYY');
        _this.payMethod = info.paid_method === 'cod' ? 'COD' : 'PAID';
        _this.orderAt = info.order_to;
        _this.tax = info.tax;
        _this.driverId = info.driver_id;

        if (info.uid) {
          var userinfo = {
            id: info.uid
          };

          _this.api.post('users/getById', userinfo).subscribe(function (data) {
            console.log('user info=>', data);

            if (data && data.status === 200 && data.data && data.data.length) {
              _this.userInfo = data.data[0];
              console.log(_this.userInfo);
            }
          }, function (error) {
            console.log(error);
          });
        }

        if (_this.orderAt === 'home') {
          var address = JSON.parse(info.address);
          console.log('---address', address);

          if (address && address.address) {
            _this.userLat = address.lat;
            _this.userLng = address.lng;
            _this.address = address.landmark + ' ' + address.house + ' ' + address.address + ' ' + address.pincode;

            _this.getDrivers();
          }

          if (info.assignee && info.assignee !== '') {
            var assignee = JSON.parse(info.assignee);
            _this.assignee = assignee;

            var driver = _this.assignee.filter(function (x) {
              return x.assignee === localStorage.getItem('uid');
            });

            console.log('-------------', driver);

            if (driver && driver.length) {
              _this.driverId = driver[0].driver;
              console.log('driverid===================', _this.driverId);
            }
          }

          if (info.driver_id && info.driver_id !== '') {
            var drivers = info.driver_id.split(',');
            _this.assigneeDriver = drivers;
          }

          console.log('----', _this.assignee);
          console.log('----', _this.assigneeDriver);
        }
      } else {
        _this.util.errorToast(_this.util.getString('Something went wrong'));
      }
    }, function (error) {
      console.log(error);
      _this.loaded = true;

      _this.util.errorToast(_this.util.getString('Something went wrong'));
    });
  };

  OrderDetailPage.prototype.ngOnInit = function () {};

  OrderDetailPage.prototype.back = function () {
    this.util.newOrder();
    this.navCtrl.back();
  };

  OrderDetailPage.prototype.call = function () {
    if (this.userInfo.mobile) {
      window.open('tel:' + this.userInfo.mobile);
    } else {
      this.util.errorToast(this.util.getString('Number not found'));
    }
  };

  OrderDetailPage.prototype.email = function () {
    if (this.userInfo.email) {
      window.open('mailto:' + this.userInfo.email);
    } else {
      this.util.errorToast(this.util.getString('Email not found'));
    }
  };

  OrderDetailPage.prototype.printOrder = function () {
    console.log('print order');
    var options = {
      name: 'Groceryee App Summary',
      duplex: false
    };
    var order = this.orderString.join('');
    var content = '<div style="padding: 20px;display: flex;flex-direction: column;"> <h2 style="text-align: center;">Groceryee Order Summary</h2> <p style="float: left;margin:0px;"><b>' + this.util.store.name + '</b></p> <p style="float: left;margin:0px;"><b> ' + this.userInfo.first_name + ' ' + this.userInfo.last_name + ' </b></p> <p style="float: left;margin:0px;">' + this.datetime + ' </p> </div>' + order + '<p style="border-bottom: 1px solid black;margin:10px 0px;"> <span style="float: left;font-weight: bold;">SubTotal</span> <span style="float: right;font-weight: bold;">' + this.grandTotal + '$</span> </p> <br> <p style="border-bottom: 1px solid black;margin:10px 0px;"> <span style="float: left;font-weight: bold;">Delivery Charge</span> <span style="float: right;font-weight: bold;">' + this.grandTotal + '$</span> </p> <br> <p style="border-bottom: 1px solid black;margin:10px 0px;"> <span style="float: left;font-weight: bold;">Service Tax</span> <span style="float: right;font-weight: bold;">' + this.tax + '$</span> </p> <br> <p style="border-bottom: 1px solid black;margin:10px 0px;"> <span style="float: left;font-weight: bold;">Total</span> <span style="float: right;font-weight: bold;">' + this.grandTotal + '$</span> </p>';
    console.log(content);
    this.printer.print(content, options).then(function (data) {
      console.log(data);
    })["catch"](function (error) {
      console.log(error);
    });
  }; // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: SelectDriversPage,
  //     backdropDismiss: false,
  //     showBackdrop: true,
  //     componentProps: {
  //       item: this.dummyDrivers
  //     }
  //   });
  //   modal.onDidDismiss().then((data) => {
  //     console.log(data);
  //     if (data && data.role === 'selected') {
  //       this.drivers = data.data;
  //       if (this.drivers && this.drivers.length) {
  //         const newOrderNotes = {
  //           status: 1,
  //           value: 'Order ' + 'accepted' + this.statusText,
  //           time: moment().format('lll'),
  //         };
  //         this.orderDetail.push(newOrderNotes);
  //         this.util.show();
  //         const assignee = {
  //           driver: this.drivers[0].id,
  //           assignee: localStorage.getItem('uid')
  //         };
  //         this.assignee.push(assignee);
  //         console.log('*********************************', this.assignee);
  //         this.assigneeDriver.push(this.drivers[0].id);
  //         console.log('////////////////////////////', this.assigneeDriver);
  //         const param = {
  //           id: this.id,
  //           notes: JSON.stringify(this.orderDetail),
  //           status: JSON.stringify(this.orderStatus),
  //           driver_id: this.assigneeDriver.join(),
  //           assignee: JSON.stringify(this.assignee)
  //         };
  //         console.log('===================================', param);
  //         this.api.post('orders/editList', param).subscribe((data: any) => {
  //           console.log('order', data);
  //           this.util.hide();
  //           this.updateDriver(this.drivers[0].id, 'busy');
  //           if (data && data.status === 200) {
  //             this.sendNotification('accepted');
  //             this.back();
  //           } else {
  //             this.util.errorToast(this.util.getString('Something went wrong'));
  //           }
  //         }, error => {
  //           console.log(error);
  //           this.util.hide();
  //           this.util.errorToast(this.util.getString('Something went wrong'));
  //         });
  //       }
  //     }
  //   });
  //   await modal.present();
  // }


  OrderDetailPage.prototype.updateDriver = function (uid, value) {
    var param = {
      id: uid,
      current: value
    };
    console.log('param', param);
    this.api.post('drivers/edit_profile', param).subscribe(function (data) {
      console.log(data);
    }, function (error) {
      console.log(error);
    });
  };

  OrderDetailPage.prototype.updateStatus = function (value) {
    var _this = this;

    var newOrderNotes = {
      status: 1,
      value: 'Order ' + value + this.statusText,
      time: moment().format('lll')
    };
    this.orderDetail.push(newOrderNotes);
    this.util.show();
    var param = {
      id: this.id,
      notes: JSON.stringify(this.orderDetail),
      status: JSON.stringify(this.orderStatus)
    };
    this.api.post('orders/editList', param).subscribe(function (data) {
      console.log('order', data);

      _this.util.hide();

      if (data && data.status === 200) {
        _this.sendNotification(value);

        _this.back();
      } else {
        _this.util.errorToast(_this.util.getString('Something went wrong'));
      }
    }, function (error) {
      console.log(error);

      _this.util.hide();

      _this.util.errorToast(_this.util.getString('Something went wrong'));
    });
  };

  OrderDetailPage.prototype.changeStatus = function (value) {
    var _this = this;

    console.log(value);
    this.orderStatus.forEach(function (element) {
      if (element.id === localStorage.getItem('uid')) {
        element.status = value;
      }
    });
    console.log(this.orderDetail);

    if (value === 'accepted' && this.orderAt === 'home') {
      // this.presentModal();
      var assignee = {
        driver: this.assigneeDriver.join(','),
        assignee: localStorage.getItem('uid')
      };
      this.assignee.push(assignee);
      var param = {
        id: this.id,
        notes: JSON.stringify(this.orderDetail),
        status: JSON.stringify(this.orderStatus),
        driver_id: this.assigneeDriver.join(','),
        assignee: JSON.stringify(this.assignee)
      };
      this.api.post('orders/editList', param).subscribe(function (data) {
        console.log("data accepted", data);

        _this.back();
      });
    } else if (value === 'accepted' && this.orderAt !== 'home') {
      this.util.show();
      var newOrderNotes = {
        status: 1,
        value: 'Order ' + value + this.statusText,
        time: moment().format('lll')
      };
      this.orderDetail.push(newOrderNotes);
      var param = {
        id: this.id,
        notes: JSON.stringify(this.orderDetail),
        status: JSON.stringify(this.orderStatus)
      };
      this.api.post('orders/editList', param).subscribe(function (data) {
        console.log('order', data);

        _this.util.hide();

        if (data && data.status === 200) {
          _this.sendNotification('accepted');

          _this.back();
        } else {
          _this.util.errorToast(_this.util.getString('Something went wrong'));
        }
      }, function (error) {
        console.log(error);

        _this.util.hide();

        _this.util.errorToast(_this.util.getString('Something went wrong'));
      });
    } else {
      this.updateStatus(value);
    } // this.api

  };

  OrderDetailPage.prototype.sendNotification = function (value) {
    if (this.userInfo && this.userInfo.fcm_token) {
      this.api.sendNotification('Your order #' + this.id + ' ' + value, 'Order ' + value, this.userInfo.fcm_token).subscribe(function (data) {
        console.log('onesignal', data);
      }, function (error) {
        console.log('onesignal error', error);
      });
    }
  };

  OrderDetailPage.prototype.changeOrderStatus = function () {
    var _this = this;

    console.log(this.changeStatusOrder);
    console.log(this.orderDetail);

    if (this.changeStatusOrder) {
      this.orderStatus.forEach(function (element) {
        if (element.id === localStorage.getItem('uid')) {
          element.status = _this.changeStatusOrder;
        }
      });

      if (this.changeStatusOrder !== 'ongoing' && this.orderAt === 'home' && this.driverId !== '0') {
        // release driver from this order
        console.log('relase driver');
        var newOrderNotes = {
          status: 1,
          value: 'Order ' + this.changeStatusOrder + this.statusText,
          time: moment().format('lll')
        };
        this.orderDetail.push(newOrderNotes);
        this.util.show();
        var param = {
          id: this.id,
          notes: JSON.stringify(this.orderDetail),
          status: JSON.stringify(this.orderStatus)
        };
        this.api.post('orders/editList', param).subscribe(function (data) {
          console.log('order', data);

          _this.util.hide();

          _this.updateDriver(_this.driverId, 'active');

          if (data && data.status === 200) {
            _this.sendNotification(_this.changeStatusOrder);

            _this.back();
          } else {
            _this.util.errorToast(_this.util.getString('Something went wrong'));
          }
        }, function (error) {
          console.log(error);

          _this.util.hide();

          _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
      } else {
        var newOrderNotes = {
          status: 1,
          value: 'Order ' + this.changeStatusOrder + this.statusText,
          time: moment().format('lll')
        };
        this.orderDetail.push(newOrderNotes);
        this.util.show();
        var param = {
          id: this.id,
          notes: JSON.stringify(this.orderDetail),
          status: JSON.stringify(this.orderStatus)
        };
        this.api.post('orders/editList', param).subscribe(function (data) {
          console.log('order', data);

          _this.util.hide();

          if (data && data.status === 200) {
            _this.sendNotification(_this.changeStatusOrder);

            _this.back();
          } else {
            _this.util.errorToast(_this.util.getString('Something went wrong'));
          }
        }, function (error) {
          console.log(error);

          _this.util.hide();

          _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
      }
    }
  };

  OrderDetailPage = __decorate([core_1.Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.page.html',
    styleUrls: ['./order-detail.page.scss']
  })], OrderDetailPage);
  return OrderDetailPage;
}();

exports.OrderDetailPage = OrderDetailPage;