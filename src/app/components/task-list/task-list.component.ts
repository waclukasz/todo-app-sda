import { Component, OnInit } from '@angular/core';

@Component({
  selector: "task-list",
  templateUrl: "task-list.component.html",
})
export class TaskListComponent implements OnInit {
  public taskList: string[];

  public ngOnInit(): void {
    this.taskList = ["task-1", "task-2", "task-3"];
  }
}
