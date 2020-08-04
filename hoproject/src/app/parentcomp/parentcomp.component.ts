import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent implements OnInit {

  favfood :string = "Pizza"

  datafromchild: string = ""

  constructor() { }

  ngOnInit() {
  }

  FromChild($event)
  {
    this.datafromchild = $event
  }

}
