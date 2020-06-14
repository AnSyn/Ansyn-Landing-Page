import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.less']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images: any[] = ["../../assets/pics/1.jpg",
                  "../../assets/pics/2.jpg",
                  "../../assets/pics/3.jpg"];

}
