import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})

export class ImageComponent  implements OnInit {
  @Input() imageLink: string = '';
  @Input() caption: string = '';

  constructor() {
    if (this.imageLink == '' && this.caption == '' ) {
      let defaultImages = [ 
        '/assets/images/default-01.jpg',
        '/assets/images/default-02.jpg',
        '/assets/images/default-03.jpg',
        '/assets/images/default-04.jpg',
        '/assets/images/default-05.jpg', 
        '/assets/images/default-06.jpg',
      ]
      this.imageLink = defaultImages[Math.floor(Math.random()*6)]
      this.caption = 'Dog ambush, No photo found.'
    }
  }

  ngOnInit() {}

}
