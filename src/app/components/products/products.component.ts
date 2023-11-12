import { Component, OnInit} from '@angular/core';
import { CreateProductDTO, Product, UpdateProductDTO } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  myShoppingCart: Product[] = [];

  total = 0;

  products: Product[] = [];

  showProductDetail = false;

  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: ''
  };

  limit = 10;
  offset = 0;
  /*
  today = new Date();
  date = new Date(2021, 1, 21);
  */

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void{
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.productService.getProduct(id)
    .subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data;
    });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo Producto',
      price: 1000,
      description: 'Producto agregado manualmente',
      categoryId: 1,
      images: ['https://source.unsplash.com/random', 'https://source.unsplash.com/random','https://source.unsplash.com/random']
    }
    this.productService.createProduct(product)
    .subscribe(data => {
      console.log('created: ',data);
      this.products.unshift(data);
    });
  }

  onUpdateProduct() {
    const changes: UpdateProductDTO = {
      title: 'Nuevo titulo',
    }
    const id = this.productChosen.id;
    this.productService.updateProduct(id, changes)
    .subscribe(data => {
      this.productChosen.title = data.title;
      const productIndex = this.products.findIndex(item => item.id == this.productChosen.id);
      this.products[productIndex] = data;
    });
  }

  onDeleteProduct(){
    const id = this.productChosen.id;
    this.productService.deleteProduct(id)
    .subscribe(() => {
      const productIndex = this.products.findIndex(item => item.id == this.productChosen.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

  loadMore(){
    this.productService.getAllProducts(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
}
