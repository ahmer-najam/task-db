import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/angular';

import { MyEventService } from '../shared/my-event.service';

@Component({
  selector: 'app-task-calendar',
  templateUrl: './task-calendar.component.html',
  styleUrls: ['./task-calendar.component.scss'],
})
export class TaskCalendarComponent implements OnInit {
  ngOnInit(): void {}
  constructor(public service: MyEventService) {}

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: this.service.INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    displayEventEnd: true,
    displayEventTime: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    this.service.selectInfo = selectInfo;
    this.service.initData();
    this.service.formData.start = selectInfo.start;
    this.service.formData.end = selectInfo.start;

    this.service.showCalendar = false;
  }

  handleEventClick(clickInfo: EventClickArg) {
    let results = this.service.getEventById(clickInfo.event.id);

    if (results.length > 0) {
      this.service.formData = results[0];
      this.service.showCalendar = false;
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    //this.currentEvents = this.service.INITIAL_EVENTS as EventApi[];
  }
}
