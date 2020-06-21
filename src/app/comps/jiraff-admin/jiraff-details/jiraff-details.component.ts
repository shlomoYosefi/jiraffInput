import { Component, OnInit, Input } from '@angular/core';
import { jiraff } from '../jiraff-page/jiraff-page.component';

@Component({
  selector: 'app-jiraff-details',
  templateUrl: './jiraff-details.component.html',
  styleUrls: ['./jiraff-details.component.css']
})
export class JiraffDetailsComponent implements OnInit {

  @Input() j:jiraff

  constructor() { }

  ngOnInit(): void {
  }

}
