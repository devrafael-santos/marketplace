
import { Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailComponent } from "./components/product-details/product-details.component";


export const ROUTES: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: ':productId/details',
    component: ProductDetailComponent,
  },
]
