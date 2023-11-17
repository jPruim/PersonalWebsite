import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  @Input() title: string ='';
  @Input() description: string ='';
  @Input() destination: string = '';
  constructor( private router: Router) { }

  ngOnInit() {}

  navigate(){
    if(this.destination !== ''){
      this.router.navigate([this.destination]);
    }
  }

}
