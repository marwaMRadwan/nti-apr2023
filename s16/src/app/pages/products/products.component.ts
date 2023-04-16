import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  products=[{
    title : 'product name 1',
    body:'Product body 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sequi!'
  },
  {
    title : 'product name 2',
    body:'Product body 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sequi!'
  },
  {
    title : 'product name 3',
    body:'Product body 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sequi!'
  },
  {
    title : 'product name 4',
    body:'Product body 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sequi!'
  },
]
}
