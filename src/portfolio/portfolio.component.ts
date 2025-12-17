import { Component } from '@angular/core';

interface IPortfolio {
  imgSrc: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  isHidden: boolean = true;
  modelImage: string = '';

  portfolios: IPortfolio[] = [
    { imgSrc: './assets/images/poert1.png' },
    { imgSrc: './assets/images/port2.png' },
    { imgSrc: './assets/images/port3.png' },
    { imgSrc: './assets/images/poert1.png' },
    { imgSrc: './assets/images/port2.png' },
    { imgSrc: './assets/images/port3.png' },
  ];

  closeSlied(target: EventTarget | null, img: HTMLImageElement){
    if(target == img){
      return;
    }else{
      this.isHidden = true
    }
  }
}
