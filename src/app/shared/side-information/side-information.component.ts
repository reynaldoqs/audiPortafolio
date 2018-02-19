import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aud-side-information',
  templateUrl: './side-information.component.html',
  styleUrls: ['./side-information.component.css']
})
export class SideInformationComponent implements OnInit {
  @Input() skills;
  constructor() { }

  ngOnInit() {
    console.log(this.skills);
  }

}
