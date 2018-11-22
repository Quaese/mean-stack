import { StoreService } from './../../store/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.less']
})
export class AddOptionComponent implements OnInit {
  private severities: Array<string>;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getStore$().subscribe(store => console.log("store", store));
  }

}
