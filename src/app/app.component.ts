import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twitter-like';
  viewMode = "map";
  courses;
  isSelected:boolean = true;


  addNew() {
    this.courses.push({ id: 4, name: "course4" });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.slice(index, 1);
    //course.name = 'koud';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" }
    ];
  }

trackCourse(index,course){
  return course ? course.is : undefined;
}

onClick(){
  this.isSelected = !this.isSelected;
}



}


