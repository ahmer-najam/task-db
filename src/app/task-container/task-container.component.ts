import { Component, OnInit } from '@angular/core';
import { MyEventService } from '../shared/my-event.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  constructor(public service: MyEventService) {}

  ngOnInit(): void {}
}
