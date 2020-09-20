import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-components-home-boxes',
  templateUrl: './home-boxes.component.html',
  styleUrls: ['./home-boxes.component.css']
})
export class HomeBoxesComponent implements OnInit {

  @Input('image-path') imagePath: string;
  @Input('bg-color') bgColor: string;
  @Input('inside-text') insideText: string;
  @Input('router-link') routedTo: string;
  constructor() { }

  ngOnInit(): void {
  }

}
