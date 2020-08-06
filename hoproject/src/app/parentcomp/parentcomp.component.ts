import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentcompComponent implements OnInit {

  favfood: string = "Pizza"

  datafromchild: string = ""

  public data: any[] = [
    { id:"a",
      text: 'Furniture', items: [
        { id:"b",text: 'Tables & Chairs' },
        { id:"c",text: 'Sofas' },
        { id:"d",text: 'Occasional Furniture' }
      ]
    },
    {id:"e",
      text: 'Decor', items: [
        { id:"f",text: 'Bed Linen', items: [{ id:"i",text: "s1" }, { id:"j",text: "s2" }] },
        { id:"g",text: 'Curtains & Blinds' },
        { id:"h",text: 'Carpets' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  FromChild($event) {
    this.datafromchild = $event
  }

  public hasChildren = (item: any) => item.items && item.items.length > 0;
  public fetchChildren = (item: any) => of(item.items);

  public iconClass({ text, items }: any): any {
    return {
      'k-i-file-pdf': is(text, 'pdf'),
      'k-i-folder': items !== undefined,
      'k-i-html': is(text, 'html'),
      'k-i-image': is(text, 'jpg|png'),
      'k-icon': true
    };
  }

  public selectedKeys: any[] = ['0_2'];

  public handleSelection({ index, dataItem }: any): void {
    console.log(dataItem);
    
    
  }
}
