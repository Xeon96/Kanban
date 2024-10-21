import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Board } from '../../models/board.models';
import { Column } from '../../models/Column.model';
import { AddTabComponent } from '../add-tab/add-tab.component';
import { FormsModule } from '@angular/forms';
 import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-mainview',
  standalone: true,
  imports: [DragDropModule,CommonModule,AddTabComponent,FormsModule,AddTaskComponent],
  templateUrl: './mainview.component.html',
  styleUrl: './mainview.component.css'
})
export class MainviewComponent {


   BoardName = 'Activities'
  board: Board = new Board(this.BoardName);

  constructor(){

  }
  AddTabisVisisble = false;

 
  ngOnInit() : void{
    this.board = new Board(this.BoardName,[]);

    // new Column('Ideas',['Idea1','Idea2']),
  
    // new Column('Research',['Research1','Research2']),
    // new Column('ToDo',['ToDo1','ToDo2']),
    // new Column('Done',['Done1','Done2'])

  }


  // board: Board = new Board('Test Board',[
  //   new Column('Ideas',['Idea1','Idea2','Idea1','Idea2','Idea1','Idea2','Idea1','Idea2','Idea1','Idea2','Idea1','Idea2','Idea1','Idea2','Idea1','Idea2','Idea1','Idea2','Idea1','Idea2']),

  //   new Column('Research',['Research1','Research2']),
  //   new Column('ToDo',['ToDo1','ToDo2']),
  //   new Column('Done',['Done1','Done2'])
  // ]);
  //new Board('awe',[new Column('asd',['asd','zxc'])]);
  // 'awe',[new Column('asd',['asd','zxc'])]
 

  addNewTab(TabName: string){
    debugger
    this.AddTabisVisisble = !this.AddTabisVisisble;

    if(this.board.columns === undefined || this.board.columns == null)
    {
      this.board.columns = [new Column(TabName,[])]
    }
    else
      this.board.columns?.push(new Column(TabName,[]));
  }
  ShowHidePanel(){
    this.AddTabisVisisble = !this.AddTabisVisisble;
  }
  todo = [
    'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
  ];

  done = [
    'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
  ];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
