import { Component, OnInit } from '@angular/core';
class product {
  id: number = 0;
  name: string = '';
  price: number = 0;
  img: string = '';

  constructor(id: number, name: string, price :number, img: string ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
  }
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  result: any;
  productList: product[] = [];
  id: number = 0;
  name: string = '';
  price: number = 0;
  img: string = '';

  constructor() {
    this.productList.push(new product(1, "merc", 5000, "https://i1-vnexpress.vnecdn.net/2021/09/19/MercedesEclasspng-1632023829.png?w=500&h=300&q=100&dpr=1&fit=crop&s=Alw9jajR9NbdvnKRgMDGQA&t=image"));
    this.productList.push(new product(2, "hyundai", 5000, "https://i1-vnexpress.vnecdn.net/2021/09/17/avatarjpg-1631841781.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=heh4VYqh5WyyNRce94Yn6g&t=image"));
    this.productList.push(new product(3, "audi", 5000, "https://vnn-imgs-f.vgcloud.vn/2021/12/22/15/loat-xe-audi-phien-ban-gioi-han-sieu-chat.jpeg"));

  }

  ngOnInit(): void {
  }

  delete(id: number): void {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.productList.splice(i, 1);
      }
    }
  }

  create() {
    this.productList.push(new product(this.id, this.name, this.price, this.img))
  }


  showEdit(id: number) :void {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.id = this.productList[i].id;
        this.name = this.productList[i].name;
        this.price = this.productList[i].price;
        this.img = this.productList[i].img;
        return;
      }
    }
  }

  editProduct(id: number) : void {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.productList[i] = new product(this.id, this.name, this.price, this.img);
      }
    }
  }
}
