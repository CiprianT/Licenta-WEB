import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-name',
  templateUrl: './home-name.component.html',
  styleUrls: ['./home-name.component.scss']
})
export class HomeNameComponent implements OnInit {

  @Input()
  name: string = "initialName";
  
  constructor() { }

  ngOnInit() {
  }

}
