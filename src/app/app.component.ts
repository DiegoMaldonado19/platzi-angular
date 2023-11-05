import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Diego Maldonado';
  age = 23;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;

  person = {
    name: 'Diego Maldonado',
    age: 18,
    avatar: 'https://source.unsplash.com/random'
  }

  names: string[] = ['Diego', 'Jose', 'Edwin'];

  params: string[] = ['Nombre', 'Cantidad', 'Precio'];

  products: any[] = ['Jabon para manos', 18, 18.90];

  foods: any[] = ['Peperoni', 25, 5.99];

  newName = '';

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
}
