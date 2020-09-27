import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TaskListComponent,
    TodoListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
