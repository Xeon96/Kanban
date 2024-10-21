import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-tab',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tab.component.html',
  styleUrl: './add-tab.component.css'
})
export class AddTabComponent {
  @Output() addTab = new EventEmitter();

  newTab : string = '';

  Add_Tab(){

    this.addTab.emit(this.newTab);
  }

}
