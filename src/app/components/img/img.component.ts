import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit,OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  img: string = '';

  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  defaultImg = './assets/images/test.jpg';

  counter = 0;

  counterFn: number | undefined;

  constructor(){
    /* Before render */
    /* No async - runs one time */
    console.log('constructor', 'ImgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges){
    /* Before and during the render */
    /* Changes inputs - runs many times */
    console.log('ngOnChanges', 'ImgValue =>', this.img);
    console.log('changes',changes);
  }

  ngOnInit(): void{
    /* Before render */
    /* We can do async - fetch - only runs one time */
    console.log('ngOnInit', 'imgValue => ', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter +=1;
      console.log('running counter');
    }, 1000)
  }

  ngAfterViewInit(): void {
    /* After the render */
    /* we handle the children */
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    /* runs only when we delete the render */
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.defaultImg;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}

