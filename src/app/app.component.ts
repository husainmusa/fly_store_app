/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { ActionSheetController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from './services/api.service';
import { UtilService } from './services/util.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages: any[] = [];
    selectedIndex: any;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private navCtrl: NavController,
        private api: ApiService,
        public util: UtilService,
        private oneSignal: OneSignal,
        private router: Router,
        private nativeAudio: NativeAudio,
        private actionSheetController: ActionSheetController,
        public firebaseDB: AngularFireDatabase
    ) {
        this.selectedIndex = 0;

        this.initializeApp();

    }


    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
            this.appPages = this.util.appPages; console.log('%c Copyright and Good Faith Purchasers © 2020-present initappz. ', 'background: #222; color: #bada55');
            const lng = localStorage.getItem('language');
            if (!lng || lng === null) {
                this.api.get('users/getDefaultSettings').subscribe((data: any) => {
                    //console.log('----------------- app setting', data);
                    if (data && data.status === 200 && data.data) {
                        const manage = data.data.manage;
                        const language = data.data.lang;
                        if (manage && manage.length > 0) {
                            if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                                this.util.appClosed = true;
                                this.util.appClosedMessage = manage[0].message;
                            } else {
                                this.util.appClosed = false;
                            }
                        } else {
                            this.util.appClosed = false;
                        }
                        if (language) {
                            this.util.translations = language;
                            localStorage.setItem('language', data.data.file);
                            localStorage.setItem('language_id', data.data.langid);
                        }
                        if(data.data.lang_position){
                            if(data.data.lang_position == "0"){
                              this.util.direction = "rtl";
                              this.util.cside = "left"
                            }else{
                              this.util.direction = "ltr";
                              this.util.cside = "right"
                            }
                        }
                        const settings = data.data.settings;
                        if (settings && settings.length > 0) {
                            const info = settings[0];
                            // this.util.direction = info.appDirection;
                            // this.util.cside = info.currencySide;
                            this.util.currecny = info.currencySymbol;
                            document.documentElement.dir = this.util.direction;
                        } else {
                            this.util.direction = 'ltr';
                            this.util.cside = 'right';
                            this.util.currecny = '$';
                            document.documentElement.dir = this.util.direction;
                        }

                        const general = data.data.general;
                        //console.log('generalllll============================>', general)
                        if (general && general.length > 0) {
                            const info = general[0];
                            this.util.general = info;

                        }
                    }
                }, error => {
                    console.log('default settings', error);
                });
            } else {
                const param = {
                    id: localStorage.getItem('language_id')
                };
                this.api.post('users/getDefaultSettingsById', param).subscribe((data: any) => {
                    console.log('----------------- app setting', data);
                    if (data && data.status === 200 && data.data) {
                        const manage = data.data.manage;
                        const language = data.data.lang;
                        if (manage && manage.length > 0) {
                            if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                                this.util.appClosed = true;
                                this.util.appClosedMessage = manage[0].message;
                            } else {
                                this.util.appClosed = false;
                            }
                        } else {
                            this.util.appClosed = false;
                        }
                        if (language) {
                            this.util.translations = language;
                        }
                        const settings = data.data.settings;
                        if (settings && settings.length > 0) {
                            const info = settings[0];
                            // this.util.direction = info.appDirection;
                            // this.util.cside = info.currencySide;
                            if(data.data.lang_position == "0"){
                                this.util.direction = "rtl";
                            }else{
                                this.util.direction = "ltr";
                            }
                            this.util.currecny = info.currencySymbol;
                            document.documentElement.dir = this.util.direction;

                        } else {
                            this.util.direction = 'ltr';
                            this.util.cside = 'right';
                            this.util.currecny = '$';
                            document.documentElement.dir = this.util.direction;
                        }
                        const general = data.data.general;
                        console.log('generalllll============================>', general)
                        if (general && general.length > 0) {
                            const info = general[0];
                            this.util.general = info;
                        }
                        if(data.data.lang_position){
                            if(data.data.lang_position == "0"){
                                this.util.direction = "rtl";
                                this.util.cside = "left"
                            }else{
                                this.util.direction = "ltr";
                                this.util.cside = "right"
                            }
                        }
                    }
                }, error => {
                    console.log('default settings by id', error);
                    this.util.appClosed = false;
                    this.util.direction = 'ltr';
                    this.util.cside = 'right';
                    this.util.currecny = '$';
                    document.documentElement.dir = this.util.direction;
                });
            }
            if (this.platform.is('cordova')) {
                console.log('platform is okk');
                setTimeout(async () => {
                    await this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);
                    this.oneSignal.getIds().then((data) => {
                        console.log('-----------------------------------', data);
                        localStorage.setItem('fcm', data.userId);
                        const uid = localStorage.getItem('uid');
                        if (uid && uid !== null && uid !== 'null') {
                            const param = {
                                id: uid,
                                fcm_token: data.userId
                            };
                            this.api.post('users/edit_profile', param).subscribe((data: any) => {
                                console.log('user info=>', data);
                            }, error => {
                                console.log(error);
                            });
                        }
                    });
                    this.oneSignal.enableSound(true);
                    await this.oneSignal.endInit();
                }, 1000);

                this.nativeAudio.preloadSimple('audio', 'assets/alert.mp3').then((data: any) => {
                    console.log('dupletx', data);
                }, error => {
                    console.log(error);
                }).catch(error => {
                    console.log(error);
                });
                this.oneSignal.handleNotificationReceived().subscribe(data => {
                    console.log('got order', data);

                    /*this.api.geNewtOrdersEvent();
                    this.nativeAudio.play('audio', () => console.log('audio is done playing')).catch(error => console.log(error));
                    this.nativeAudio.setVolumeForComplexAsset('audio', 1);
                    this.presentActionSheet();*/

                });




                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            }

            const uid = localStorage.getItem('uid');
            if (uid && uid !== null && uid !== 'null') {
                const param = {
                    id: uid
                };
                this.api.post('stores/getByUid', param).subscribe((data: any) => {
                    console.log('*******************', data);
                    if (data && data.status === 200 && data.data && data.data.length) {
                        this.util.store = data.data[0];
                        this.util.publishLoggedIn(this.util.store);
                    } else {
                        localStorage.clear();
                        this.navCtrl.navigateRoot(['/login']);
                    }
                }, error => {
                    console.log(error);
                });
            }

            this.platform.backButton.subscribe(async () => {
                console.log('asd', this.router.url, 'ad', this.router.isActive('/tabs/', true));
                if (this.router.url.includes('/tabs/') || this.router.url.includes('/login')) {
                    navigator['app'].exitApp();
                }
            });
            let isFirstTime =true;
            this.util.subscribeLoggedIn().subscribe((s:any)=>{                
                if(this.util.store && this.util.store.uid && this.util.store.uid!=""){
                    this.firebaseDB.object(['store',this.util.store.uid,'status'].join('/')).snapshotChanges().subscribe((action)=>{
                        console.log('ORDER CHANGE::',action.payload.val());

                        this.api.geNewtOrdersEvent();
                        if(!isFirstTime){
                        this.nativeAudio.play('audio', () => console.log('audio is done playing')).catch(error => console.log(error));
                        this.nativeAudio.setVolumeForComplexAsset('audio', 1);
                        this.presentActionSheet();
                        }
                        isFirstTime = false;
                    },(error)=>{
                        console.log('ORDER CHANGE ERROR::',error);
                    });
                }
            });

        });
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: this.util.getString('Update Status'),
            mode: 'md',
            buttons: [{
                text: this.util.getString('OK'),
                icon: 'volume-mute',
                handler: () => {
                    console.log('Delete clicked');
                    this.nativeAudio.stop('audio').then(() => console.log('done'), () => console.log('error'));
                }
            }, {
                text: this.util.getString('Cancel'),
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                    this.nativeAudio.stop('audio').then(() => console.log('done'), () => console.log('error'));
                }
            }]
        });

        await actionSheet.present();
    }

    logout() {
        localStorage.clear();
        this.navCtrl.navigateRoot(['/login']);
    }
}
