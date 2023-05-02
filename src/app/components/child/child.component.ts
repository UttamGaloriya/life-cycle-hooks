import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() userName:string = '';


// ngOnChanges(changes:SimpleChanges) {
//      console.log('ngOnChanges triggered', changes);

//      if (!changes['userName'].isFirstChange())
//      {
//         if (changes['userName'].currentValue === "Chris") {
//            this.userName = 'Hello ' + this.userName
//         } else {
//            this.userName = changes['userName'].previousValue
//         }
//      }
//   }
  constructor() { console.log("this is child component constructor")}

  ngOnInit() {
    console.log("this is child component ngonInit")
  }

}
