import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.less']
})
export class ImagesComponent implements OnInit {

  images: any[] = ["../../assets/pics/1.jpg","../../assets/pics/2.jpg","../../assets/pics/3.jpg"];
  currentImage: number = 0;

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

  ngOnInit(): void {
    
  }
}
