import { Component } from '@angular/core';

import * as moment from 'moment';

import { Task } from './models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public title = 'todo-app'
	public task: string
	public taskList: Task[] = []
	public inputPlaceholder = 'Add task'

	public onClick(): void {
		const defautlTask: Task = {
			name: null,
			complete: false,
			timestamp: moment(Date.now()).format('HH:mm'),
		}

		const newTask: Task = {
			...defautlTask,
			name: this.task,
		}

		console.log(newTask)

		this.taskList.push(newTask)
		this.task = ''
	}
}
