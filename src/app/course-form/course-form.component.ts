import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseIsEmpty:boolean
  courseCategory;

categories =[

  {id:"0", name: "--empty--"},
  {id:1, name: "Cloud"},
  {id:2, name: "Networks"},
  {id:3, name: "Java"},
  {id:4, name: "DataBases"}
]

  constructor() { }

  ngOnInit() {
  }

  checkIfCategoryIsEmpty(value:string){
    console.log(value);
    if(value === "0"){
      console.log("option-0");
    }


  }


}
