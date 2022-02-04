import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] | undefined;
  search: string = '';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.onGet();
  }

  onDelete(id: Number){
    this.productService.onDelete(id);
  }

}
