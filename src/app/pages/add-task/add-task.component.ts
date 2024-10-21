import { Component, EventEmitter, Output,Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Column } from '../../models/Column.model';
@Component({
  selector: 'add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  //@Output() addTask = new EventEmitter<string>();
  @Input() TabDetails : string [] = []; 
  newTask = '';
  addNewTask() {
    //this.addTask.emit(this.newTask,this.TabDetails);
    this.TabDetails.push(this.newTask);
    this.newTask = '';
  }
}
