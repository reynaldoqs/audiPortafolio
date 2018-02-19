import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'aud-design-card',
  templateUrl: './design-card.component.html',
  styleUrls: ['./design-card.component.css']
})
export class DesignCardComponent implements OnInit {
  @Input()design;
  constructor() { }

  ngOnInit() {
  }

}
