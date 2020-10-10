import { Component, Input, OnInit } from '@angular/core';

import { Task } from 'src/app/models';

@Component({
	selector: 'task-list',
	templateUrl: 'task-list.component.html',
})
export class TaskListComponent implements OnInit {
	@Input() public taskList: Task[]
	public reverseTasklist: Task[]

	public ngOnInit(): void {
		this.reverseTasklist = this.taskList.reverse()
	}
}
