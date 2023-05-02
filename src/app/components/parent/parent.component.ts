import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
userName = 'Maria';
  constructor() { 
     console.log("this is parents class constructor")
  }

  ngOnInit(): void {
  console.log("this is parents class ngOnInit")
  }
updateUser() {
     this.userName = 'Chris';
  }
}
