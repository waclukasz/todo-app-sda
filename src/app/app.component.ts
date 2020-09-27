import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title = "todo-app";
  public taskName: string;
  public taskList: string[] = [];

  public onClick(): void {
    this.taskList.push(this.taskName);
    this.taskName = "";
  }
}
