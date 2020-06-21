import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jiraff-page',
  templateUrl: './jiraff-page.component.html',
  styleUrls: ['./jiraff-page.component.css']
})
export class JiraffPageComponent implements OnInit {

  selectedJ:jiraff
  bgRnd:string

  constructor() { }

  ngOnInit(): void {
  }

  deleteJ(Jid){
    for (let i=0; i<this.jiraffArary.length;i++){
      if (this.jiraffArary[i].id == Jid){
        this.jiraffArary.splice(i,1)
      }
    }
  }

  jiraffArary :jiraff[] =[
    {id:1,name:'ariel',height:5.32,color:'blue', isBossy:true},
    {id:2,name:'aaaaa',height:7.32,color:'black', isBossy:false},
    {id:3,name:'bbbbb',height:8.32,color:'red', isBossy:false},
    {id:4,name:'ccccc',height:9.32,color:'yellow', isBossy:true},
    {id:5,name:'ddddd',height:11.32,color:'blue', isBossy:false}
  ]

}

export class jiraff{
  id:number
  name:string
  height:number
  color:string
  isBossy:boolean
}
