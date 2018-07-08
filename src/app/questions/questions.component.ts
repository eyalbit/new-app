import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models/Question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }
  quetionList:Question[];

  ngOnInit() {
    this.quetionList =[
      {
        question:'ng is command of', 
        answers: [
        {id:1, name:'.net core', isTrue:false},
        {id:2, name:'react', isTrue:false},
        {id:3, name:'angular', isTrue:true},
         {id:4, name:'java', isTrue:false}
      ] 
    },
      {
        question:'how to serve angular project', 
        answers: [
        {id:1, name:'serve <projectName>', isTrue:false},
        {id:2, name:'command in current project - ng s', isTrue:true},
        {id:3, name:'command in current project - ng s -o', isTrue:true},
         {id:4, name:'command in current project - ng build', isTrue:false}
      ] 
    },
      {
        question:'the syntax to create component ', 
        answers: [
        {id:1, name:'create component <projectName>', isTrue:false},
        {id:2, name:'create <component name>', isTrue:false},
        {id:3, name:'ng create component <componentName>', isTrue:false},
        {id:4, name:'ng g component <componentName>', isTrue:true}
      ] },
    ];

  }

}
