import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit, OnChanges {

  @Input() favfood: string
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
      this.favfood = "(" + this.favfood + ")"
    
  }

  ngOnInit() {
    
  }


  @Output() emitteddata = new EventEmitter();
  
  updateName() {
    this.emitteddata.emit("Good one");
  }

}
