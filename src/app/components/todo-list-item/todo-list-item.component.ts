import { Component, Input } from '@angular/core';

@Component({
  selector: "todo-list-item",
  templateUrl: "todo-list-item.component.html",
})
export class TodoListItemComponent {
  @Input() public task: string;
}
