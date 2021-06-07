import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public today: Date = new Date();
  public unit: string = 'pixel';
  public imageURL: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
