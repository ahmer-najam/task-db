import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyEventService } from '../shared/my-event.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  isValid = true;
  currentDate = new Date();
  constructor(public service: MyEventService) {}

  ngOnInit(): void {
    if (this.service.formData.id == '0') {
      this.service.formData.end.setMinutes(
        this.service.formData.end.getMinutes() + 15
      );
    }
  }

  onSubmit() {
    this.validateForm();
    if (this.isValid) {
      if (this.service.formData.id == '0') {
        this.service.addEvent();
      } else {
        this.service.updateEvent();
      }
      this.service.showCalendar = true;
    }
  }

  onDelete() {
    this.service.deleteEvent();
    this.service.showCalendar = true;
  }

  onBack() {
    this.service.showCalendar = true;
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.end < this.service.formData.start) {
      this.isValid = false;
      document.getElementById('end')?.focus();
    } else if (this.service.formData.title == '') {
      this.isValid = false;
      document.getElementById('title')?.focus();
    }
  }

  resetForm() {
    let myEndDate = new Date(new Date().getTime() + 15 * 60000);
    if (!this.service.formData)
      this.service.formData = {
        id: '0',
        start: new Date(),
        end: myEndDate,
        title: '',
        color: 'blue',
      };

    document.getElementById('title').focus();
  }
}
