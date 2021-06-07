import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent implements OnInit {
  public iconName: string = 'expand_more';
  public activeClass: string = "";
  public checkboxState: boolean = false;
  public filterMenu: any[] = [{
      name: 'Hasbro Games',
      id: 1,
    },
    {
      name: 'Nerf',
      id: 2,
      subMenu: [
        {
          name: 'Mega',
          id: 1,
          subMenu: [
            {
              name: 'stroke',
              id: 1,
              subMenu: [
                {
                  name: 'random',
                  id: 1,
                  subMenu: [
                    {
                      name: 'random2',
                      id: 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Alpha',
          id: 2
        },
        {
          name: 'Super Soaker',
          id: 3
        },
        {
          name: 'ultra',
          id: 4
        },
      ]
    },
    {
      name: 'Littlest pet shop',
      id: 3,
    },
    {
      name: 'Power Rangers',
      id: 4,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  menuToggle(event: Event, li: HTMLLIElement) {
    this.iconName = this.iconName === 'expand_more' ? 'expand_less' : 'expand_more';
    // this.activeClass = this.iconName === 'expand_less' ? 'active' : '';
    if(li.dataset.selected === "false"){
      li.dataset.selected = "true"
    }
    else {
      li.dataset.selected = "false"
    }
  }
  setActiveClass(listElement: HTMLLIElement): any {
    return listElement.dataset.selected === 'true' ? {"active": true} : {"active": false}
  }
  checkboxClick(event: Event, liElement: HTMLLIElement) {
    this.checkboxState = !this.checkboxState;
    if (this.checkboxState === true || liElement.dataset.selected === 'true') {
      event.stopPropagation();
    }
  }
}
