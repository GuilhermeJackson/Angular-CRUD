import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerSerivice: HeaderService) {
    headerSerivice.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate() : void {
    this.router.navigate(['/products/create']);
  }
}
