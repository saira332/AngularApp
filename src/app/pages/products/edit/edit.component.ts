import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number | undefined;
  header: string |undefined;
  product: Product = {
    id:0,
    name: '',
    price: 0
  };
  constructor(private router: Router,private route:ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
   this.id = Number(this.route.snapshot.paramMap.get('id'));
   this.header = this.id === 0? 'Add Product' : 'Edit Product';
    if(this.id != 0){
      this.product = this.productService.onGetProduct(this.id)!;
    }
  }
  onSubmit(form: NgForm){
    let product: Product = {
      id: Number(form.value.id),
      name: form.value.name,
      price: Number(form.value.price) 
    }
    if(this.id === 0){
      this.productService.onAdd(product);
    }else{
      this.productService.onUpdate(product);
    }
    
    this.router.navigateByUrl(''); 

  }

}
