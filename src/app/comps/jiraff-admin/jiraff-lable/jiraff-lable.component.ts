import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jiraff-lable',
  templateUrl: './jiraff-lable.component.html',
  styleUrls: ['./jiraff-lable.component.css']
})
export class JiraffLableComponent implements OnInit {


  @Input() label:string=''
  @Input() value:string=''


  constructor() { }

  ngOnInit(): void {
  }

}
