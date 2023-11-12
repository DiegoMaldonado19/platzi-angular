import { Component } from '@angular/core';
/*
import { Product } from './models/product.model';
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* Angular components course logic */
  imgParent = '';

  showImage = true;



  onLoaded(img: string){
    console.log('log padre ', img);
  }

  /* Angular fundamentals course logic */
  widthImg = 10;

  name = 'Diego Maldonado';
  age = 23;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;

  register = {
    name: '',
    email: '',
    password: ''
  }

  person = {
    name: 'Diego Maldonado',
    age: 18,
    avatar: 'https://source.unsplash.com/random'
  }

  names: string[] = ['Diego', 'Jose', 'Edwin'];

  params: string[] = ['Nombre', 'Cantidad', 'Precio'];

  cleaningProduct: any[] = ['Jabon para manos', 18, 18.90];

  foodItem: any[] = ['Peperoni', 25, 5.99];

  newName = '';

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

 /*
  productsOld: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: '5',
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      id: '6',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  */

  toogleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }
}
