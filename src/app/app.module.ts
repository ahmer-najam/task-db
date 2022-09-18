import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TaskCalendarComponent } from './task-calendar/task-calendar.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [AppComponent, TaskDetailsComponent, TaskContainerComponent, TaskCalendarComponent],
  imports: [
    BrowserModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
