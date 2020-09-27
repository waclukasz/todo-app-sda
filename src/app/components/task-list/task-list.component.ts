import { Component, Input } from '@angular/core';

@Component({
  selector: "task-list",
  templateUrl: "task-list.component.html",
})
export class TaskListComponent {
  @Input() public taskList: string[];
}
