import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  number: number = 0;
  subName: string = "";
  constructor() { }

  ngOnInit() {
  }

  add ():void {
    this.number+=1;
  }

  changeName(): string{
    this.subName = "valoare";
    return "altceva";
  }


}
