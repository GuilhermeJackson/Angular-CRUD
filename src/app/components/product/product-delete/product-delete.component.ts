import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {} as Product;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    })
  }
  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMensage('Produto excluido com sucesso');
    });
    this.router.navigate(['/products']);
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
