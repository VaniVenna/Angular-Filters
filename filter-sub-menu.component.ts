import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-sub-menu',
  templateUrl: './filter-sub-menu.component.html',
  styleUrls: ['./filter-sub-menu.component.scss']
})
export class FilterSubMenuComponent implements OnInit {
  @Input() public subMenuItem: any[] = [];
  public iconName: string = 'expand_more';
  public checkboxState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  menuToggle(event: Event, li: HTMLLIElement): void {
    this.iconName = this.iconName === 'expand_more' ? 'expand_less' : 'expand_more';
    li.dataset.selected = li.dataset.selected === 'true' ? 'false' : 'true';
  }
  setActiveClass(listElement: HTMLLIElement): any {
    return listElement.dataset.selected === 'true' ? {"active": true} : {"active": false };
  }
  
  checkboxClick(event: Event, liElement: HTMLLIElement) {
    this.checkboxState = this.checkboxStat === false ? true : false;
    if (this.checkboxState === true || liElement.dataset.selected === 'true') {
      event.stopPropagation();
    }
  }
}
