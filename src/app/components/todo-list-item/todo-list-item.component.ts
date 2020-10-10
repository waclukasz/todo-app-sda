import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../../models';

@Component({
	selector: 'todo-list-item',
	templateUrl: 'todo-list-item.component.html',
})
export class TodoListItemComponent implements OnInit {
	@Input() public task: Task

	public ngOnInit(): void {
		console.log(this.task)
	}

	public toggleTask(): void {
		this.task.complete = !this.task.complete

		console.log(this.task)
	}
}
