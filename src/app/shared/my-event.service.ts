import { Injectable } from '@angular/core';
import { DateSelectArg, EventInput } from '@fullcalendar/angular';
import { MyEvent } from './my-event.model';

@Injectable({
  providedIn: 'root',
})
export class MyEventService {
  formData: MyEvent;
  eventGuid = 1;
  selectInfo: DateSelectArg;
  TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
  showCalendar: boolean = true;

  constructor() {}

  INITIAL_EVENTS: MyEvent[] = [
    {
      id: this.createEventId(),
      title: 'All-day event',
      start: new Date(this.TODAY_STR + 'T03:00:00'),
      end: new Date(this.TODAY_STR + 'T03:00:00'),
      color: 'blue',
    },
    {
      id: this.createEventId(),
      title: 'Timed event',
      start: new Date(this.TODAY_STR + 'T10:00:00'),
      end: new Date(this.TODAY_STR + 'T12:00:00'),
      color: 'green',
    },
    {
      id: this.createEventId(),
      title: 'Crime',
      start: new Date(this.TODAY_STR + 'T12:00:00'),
      end: new Date(this.TODAY_STR + 'T15:00:00'),
      color: 'red',
    },
  ];

  initData() {
    this.formData = {
      id: '0',
      start: new Date(),
      end: new Date(),
      title: '',
      color: 'blue',
    };
  }

  createEventId() {
    return String(this.eventGuid++);
  }

  addEvent() {
    this.INITIAL_EVENTS.push({
      id: this.createEventId(),
      title: this.formData.title,
      start: this.formData.start,
      end: this.formData.end,
      color: this.formData.color,
    });
  }

  updateEvent() {
    this.INITIAL_EVENTS = this.INITIAL_EVENTS.filter((item) => {
      return item.id != this.formData.id;
    });

    this.INITIAL_EVENTS = [this.formData, ...this.INITIAL_EVENTS];
  }

  deleteEvent() {
    this.INITIAL_EVENTS = this.INITIAL_EVENTS.filter((item) => {
      return item.id != this.formData.id;
    });
  }

  getAllEvents() {
    return this.INITIAL_EVENTS;
  }

  getEventById(id) {
    return this.INITIAL_EVENTS.filter((item) => {
      return item.id == id;
    });
  }
}
