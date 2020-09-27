import { Component } from '@angular/core';

@Component({
  selector: "todo-header",
  templateUrl: "todo-header.component.html",
})
export class TodoHeaderComponent {
  public todoHeader: string = "Your things";
}
