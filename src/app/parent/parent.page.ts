import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {
  parent: any[] = [];
  dummyParent: any[] = [];
  dummy = Array(20);
  id: any;
  name: any[] = [];
  selectedItems:any;
  constructor(
    private modalCtrl: ModalController,
    public api: ApiService,
    public util: UtilService,
    private navParam: NavParams
  ) {
    this.getParent();
    this.selectedItems = this.navParam.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    console.log("selected items is", this.selectedItems);
  }

  getParent() {
    let shopid = localStorage.getItem('uid');
    const param = {
      id: shopid,
      limit: 5000
    };

    this.api.post('products/getByStoreId', param).subscribe((data: any) => {
      console.log(data);
      this.dummy = [];
      if (data && data.status === 200 && data.data && data.data.length) {
        for(let i = 0; i < data.data.length; i++){
          if(data.data[i].parent_id == "0" || data.data[i].parent_id == ""){
            this.parent.push(data.data[i]);
            this.dummyParent.push(data.data[i]);
          }
        }
      } else {
        this.util.errorToast(this.util.getString('No Product found'));
      }
    }, error => {
      this.util.errorToast(this.util.getString('Something went wrong'));
      this.dummy = [];
      console.log(error);
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }

  selected() {
    for(let i = 0; i < this.selectedItems.length; i++){
      const item = this.parent.filter(x => x.id === this.selectedItems[i]);
      this.name.push(item[0].name);
    }
    
    this.modalCtrl.dismiss({ id: this.selectedItems, name: this.name}, 'selected');
  }

  onSearchChange(event) {
    console.log(event.detail.value);
    this.parent = this.dummyParent.filter((ele: any) => {
      return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
    });
  }
}
