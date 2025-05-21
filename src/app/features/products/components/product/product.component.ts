import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private readonly productService = inject(ProductService);
  product = input.required<Product>();

  onAddToCart() {
    console.log('Produto que será adicionado ao carrinho: ', this.product());
  }
}
