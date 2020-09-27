import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: "todo-header",
  templateUrl: "todo-header.component.html",
})
export class TodoHeaderComponent implements OnInit {
  public todoHeader: string = "Your things";
  public personalTaskCouter: number = 0;
  public businessTaskCounter: number = 0;

  public ngOnInit(): void {}

  public getDate(): string {
    const date = new Date();
    const formatedDate = moment(date).format("MMM, DD YYYY");

    return formatedDate;
  }
}
