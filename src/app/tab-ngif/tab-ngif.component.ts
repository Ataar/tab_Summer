import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ngif',
  templateUrl: './tab-ngif.component.html',
  styleUrls: ['./tab-ngif.component.scss']
})
export class TabNgifComponent implements OnInit {

  slectedItem:string = 'SCSS'
  constructor() { }

  ngOnInit(): void {
  }

  onTab(skill:string)
  {
    this.slectedItem = skill
  }
}

