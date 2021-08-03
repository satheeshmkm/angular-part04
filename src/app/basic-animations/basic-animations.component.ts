import { Component, Input, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-basic-animations',
  templateUrl: './basic-animations.component.html',
  styleUrls: ['./basic-animations.component.css'],
  animations:[trigger('changeBoxSize',[
    state('normal',style({
      'transform':'scale(1)',
      'background-color': 'green'})),
    state('zoom',style({
      'transform':'scale(1.5)',
      'background-color': 'red'})),
    transition('*=>normal',animate('300ms')),
    transition('*=>zoom',animate('600ms'))
  ])]
})
export class BasicAnimationsComponent implements OnInit {

  @Input()getButtonStatus:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
