import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  @Input() public showPaginator: boolean = false;
  @Input() public noOfPages: number = 1;
  public iterator: number[] = [];
  public productDetail: any[] = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-c8LoEcQ3eSEXMayrG9j5qyOkNU6clu_KQ&usqp=CAU',
      name: 'furReal Check-up Zandi',
      price: 70
    },
    {
      image: 'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
      name: 'furReal Check-up Zandi',
      price: 170
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'furReal Check-up Zandi',
      price: 720
    },
    {
      image: 'https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg',
      name: 'furReal Check-up Zandi',
      price: 20
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswo_oMRm9UGHgszZmBzhAgwtOqr7merQj_A&usqp=CAU',
      name: 'furReal Check-up Zandi',
      price: 570
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1uZTBlxjOfVEiZsIt9FSo_bkxgEb6_OslQ&usqp=CAU',
      name: 'furReal Check-up Zandi',
      price: 79
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-c8LoEcQ3eSEXMayrG9j5qyOkNU6clu_KQ&usqp=CAU',
      name: 'furReal Check-up Zandi',
      price: 70
    },
    {
      image: 'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
      name: 'furReal Check-up Zandi',
      price: 170
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'furReal Check-up Zandi',
      price: 720
    },
    {
      image: 'https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg',
      name: 'furReal Check-up Zandi',
      price: 20
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswo_oMRm9UGHgszZmBzhAgwtOqr7merQj_A&usqp=CAU',
      name: 'furReal Check-up Zandi',
      price: 570
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1uZTBlxjOfVEiZsIt9FSo_bkxgEb6_OslQ&usqp=CAU',
      name: 'furReal Check-up Zandi',
      price: 79
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-c8LoEcQ3eSEXMayrG9j5qyOkNU6clu_KQ&usqp=CAU',
      name: 'furReal Check-up Zandi',
      price: 70
    },
    {
      image: 'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
      name: 'furReal Check-up Zandi',
      price: 170
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'furReal Check-up Zandi',
      price: 720
    },
    {
      image: 'https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg',
      name: 'furReal Check-up Zandi',
      price: 20
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswo_oMRm9UGHgszZmBzhAgwtOqr7merQj_A&usqp=CAU',
      name: 'furReal Check-up Zandi',
      price: 570
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1uZTBlxjOfVEiZsIt9FSo_bkxgEb6_OslQ&usqp=CAU',
      name: 'furReal Check-up Zandi',
      price: 79
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.iterator = new Array(this.noOfPages);
  }

}
