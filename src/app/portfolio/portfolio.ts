
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  selectedImage: string = '';

  setImage(imgPath: string): void {
    this.selectedImage = imgPath;
  }

}
