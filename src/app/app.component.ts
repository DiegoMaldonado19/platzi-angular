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
}
