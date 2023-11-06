import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();

  defaultImg = './assets/images/test.jpg';

  constructor(){
    /* Before render */
    /* No async - runs one time */
    console.log('constructor', 'ImgValue =>', this.img);
  }

  ngOnChanges(){
    /* Before and during the render */
    /* Changes inputs - runs many times */
    console.log('ngOnChanges', 'ImgValue =>', this.img);
  }

  ngOnInit(): void{
    /* Before render */
    /* We can do async - fetch - only runs one time */
    console.log('ngOnInit', 'imgValue => ', this.img);
  }

  ngAfterViewInit(): void {
    /* After the render */
    /* we handle the children */
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    /* runs only when we delete the render */
    console.log('ngOnDestroy');
  }

  imgError(){
    this.img = this.defaultImg;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}

