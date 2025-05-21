import { Injectable, signal } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'any'
})
export class ProductService {

  private readonly productsData = signal<Product[]>([
    {
      id: 1,
      name: 'Mouse Gamer sem fio Logitech 6 Pro X Superlight 2 com Lighspeed',
      price: 24.99,
      img: 'mouse-image-mock.png',
    },
    {
      id: 2,
      name: 'Mouse Gamer sem fio Logitech 6 Pro X Superlight 50000dpi Cor vermelha + 2',
      price: 19.99,
      img: 'mouse-image-mock2.png',
    },
    {
      id: 3,
      name: 'Mouse Gamer sem fio Logitech 6 PRO Wireless LIGHTSPEED',
      price: 34.99,
      img: 'mouse-image-mock3.png',
    },
    {
      id: 4,
      name: 'Mouse Gamer sem fio Logitech 6 PRO Wireless LIGHTSPEED',
      price: 29.99,
      img: 'mouse-image-mock3.png',
    },
    {
      id: 5,
      name: 'Mouse Gamer sem fio Logitech 6 PRO Wireless LIGHTSPEED',
      price: 49.99,
      img: '',
    },
    {
      id: 5,
      name: 'Mouse Gamer sem fio Logitech 6 PRO Wireless LIGHTSPEED',
      price: 49.99,
      img: '',
    },
    {
      id: 5,
      name: 'Mouse Gamer sem fio Logitech 6 PRO Wireless LIGHTSPEED',
      price: 49.99,
      img: '',
    },
    {
      id: 5,
      name: 'Mouse Gamer sem fio Logitech 6 PRO Wireless LIGHTSPEED',
      price: 49.99,
      img: '',
    },
    {
      id: 5,
      name: 'Mouse Gamer sem fio Logitech 6 PRO Wireless LIGHTSPEED',
      price: 49.99,
      img: '',
    },
    {
      id: 5,
      name: 'Mouse Gamer sem fio Logitech 6 PRO Wireless LIGHTSPEED',
      price: 49.99,
      img: '',
    },
  ]);

  products = this.productsData.asReadonly();
}
