import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: "product one",
      price: 1000
    },
    {
      id: 2,
      name: "product two",
      price: 2000
    },
    {
      id: 3,
      name: "product three",
      price: 3000
    }
  ];

  constructor() { }

  onGet(){
    return this.products;
  }

  onGetProduct(id: Number){
    return this.products.find(x=>x.id === id);
  }

  onAdd(product: Product){
    this.products.push(product);
  }

  onDelete(id: Number){
    let product = this.products.find(x=>x.id === id);
    let index = this.products.indexOf(product!,0);
    this.products.splice(index,1);
  }


  onUpdate(product: Product){
    let oldProduct = this.products.find(x=>x.id === product.id)!;
    oldProduct.name = product.name;
    oldProduct.price = product.price;
  }


}
