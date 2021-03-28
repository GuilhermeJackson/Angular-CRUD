import { ProductService } from './../product.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name:'',
    price: 0
  }
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void { }

  createProduct(): void {
    console.log('CHEGOU!!!2')
    this.productService.create(this.product).subscribe(() => {
      console.log('CHEGOU!!!')
      this.productService.showMensage("Operação executada com sucesso");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
