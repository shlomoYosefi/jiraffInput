import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {jiraff} from '../jiraff-page/jiraff-page.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-jiraff-item',
  templateUrl: './jiraff-item.component.html',
  styleUrls: ['./jiraff-item.component.css']
})
export class JiraffItemComponent implements OnInit {

  @Input() j:jiraff

  @Output()clickNot = new EventEmitter<null>()
  @Output()deleteNot = new EventEmitter<number>()
  @Output()randomColorNot = new EventEmitter<string>()

  constructor() { }





  ngOnInit(): void {
    setTimeout(()=>{
      this.randomColorNot.emit(this.j.color)
    },1000*this.j.id)  
  }

  deleteNotFn(){
    this.deleteNot.emit(this.j.id)
  }

}
