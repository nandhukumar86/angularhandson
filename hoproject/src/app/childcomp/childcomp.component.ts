import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {

  @Input() favfood: string
  constructor() { }

  ngOnInit() {
  }


  @Output() emitteddata = new EventEmitter();
  
  updateName() {
    this.emitteddata.emit("Good one");
  }

}
