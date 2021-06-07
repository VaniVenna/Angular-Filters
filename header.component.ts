import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public pageHeader: string = "";
  public menuItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.pageHeader = "Vani Venna";
    this.menuItems = [
      {
        name: "home",
        text: "Home"
      },
      {
        name: "about",
        text: "About"
      },
      {
        name: "characters",
        text: "Characters"
      },
      {
        name: "toys-games",
        text: "Toys-games"
      }
    ];
  }
  ngAfterViewInit(): void {
    
  }
}
