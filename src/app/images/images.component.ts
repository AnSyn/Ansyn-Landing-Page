import { Component, OnInit ,OnChanges} from '@angular/core';
import { trigger, transition, state, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.less'],
  animations: [
    trigger('fade', [
      state('void' ,style({opacity:0})),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
  ]
})

export class ImagesComponent implements OnInit {

  images: any[] = ["../../assets/pics/1.jpg","../../assets/pics/2.jpg","../../assets/pics/3.jpg"];
  currentImage: number = 0;
  newImage: boolean = false;

  constructor() { 
   
  }

  ngOnInit(): void {
    
  }

  previousImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }

  nextImage() {
    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
    }
  }

  skip() {
    if (this.currentImage < this.images.length - 1) {
      this.currentImage = this.images.length - 1;
    }
  }

  isLastPicture() {
    if (this.currentImage === this.images.length - 1)
    {
      return true;
    }
    else {
      return false;
    }
  }

  isFirstPicture() {
    if (this.currentImage === 0)
    {
      return true;
    }
    else {
      return false;
    }
  }

}
