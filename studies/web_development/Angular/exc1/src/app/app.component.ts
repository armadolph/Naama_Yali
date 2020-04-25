import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerName = "Apollo";
  ServerPID = 11;
  ServerStatus = "offline";
  buttonState = true;
  buttonInput = true;
  newInput = "";
  flag = true;
  studentArray = [];
  student_name = ""

  constructor(){
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }

  toggleServerStatus(){
    if (this.ServerStatus == "offline"){
        this.ServerStatus = "online";
    }
    else{
      this.ServerStatus = "offline";
    }
    return this.ServerStatus;
  }

  isEmpty(){
    if (this.newInput.length == 0){
      this.buttonInput = true
    }
    else {
      this.buttonInput = false

    }
    return this.buttonInput

  }

  resetName(){
    this.newInput = ""
  }

  ToggleFlag(){
    this.flag = !this.flag
    return this.flag
  }

  getColor(){
    if (this.flag ==true){
      return 'green';
    }
    else { 
      return 'red';
    }
  }

  add(){
    this.studentArray.push(this.student_name)
  }

  num_clicked = 0;
  paragraph_flag = true;

  getClickedColor(){
      if (this.num_clicked > 4) {
        return 'purple';
      }
      return 'white';
  }

  toggleParagraph(){
    this.num_clicked++;
    this.paragraph_flag = !this.paragraph_flag;
  }
}
