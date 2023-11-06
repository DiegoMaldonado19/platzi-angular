import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit{
  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();

  defaultImg = './assets/images/test.jpg';

  constructor(){

  }

  ngOnInit(): void{

  }

  imgError(){
    this.img = this.defaultImg;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}

