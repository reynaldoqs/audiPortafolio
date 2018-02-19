import { Component, OnInit} from '@angular/core';
import { galleryChild } from '../../../animations/child.animations';

@Component({
  selector: 'aud-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
  animations: [galleryChild],
})
export class DesignComponent implements OnInit {
  designs = [
    {
      title: 'campanas',
      type: 'Diseño de imagen'
    },
    {
      title: 'branding',
      type: 'Diseño de imagen'
    },
    {
      title: 'retoque',
      type: 'Diseño de imagen'
    },
    {
      title: 'web',
      type: 'Diseño de imagen'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
