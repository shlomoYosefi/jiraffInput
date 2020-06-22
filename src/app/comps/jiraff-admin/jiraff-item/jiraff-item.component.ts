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

  myColor:string
  myBorder:string

  @Output()clickNot = new EventEmitter<null>()
  @Output()deleteNot = new EventEmitter<number>()
  @Output()randomColorNot = new EventEmitter<string>()
  @Output()selectColor = new EventEmitter<string>()


  constructor() { }





  ngOnInit(): void {
    setTimeout(()=>{
      this.randomColorNot.emit(this.j.color)
    },1000*this.j.id)  
  }

  deleteNotFn(){
    this.deleteNot.emit(this.j.id)
  }

  selectColorsFn(select){
    console.log(select);
    this.myColor = select
  }

  selectBossyFn(select){
    console.log(select);
    if(select =='true'){
    this.myBorder = '20px solid green'
    }
    else{
      this.myBorder = '5px solid red'
    } 
    }

  selectColorsAllFn(select){
    
    this.selectColor.emit(select)
  }

}
