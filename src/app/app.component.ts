import { Component, ViewChild , AfterViewInit, OnInit} from '@angular/core';
import { Appointment, Service } from './app.service';
import { DxSchedulerComponent, DxTemplateDirective } from 'devextreme-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit , OnInit {
  @ViewChild (DxSchedulerComponent) scheduler: DxSchedulerComponent;
  title = 'app';
  height:string;
  schedulerInstance:any;
  appointmentData: Appointment[];
  currentDate: Date = new Date();
  showCurrentTimeIndicator: Boolean = true;
  shadeUntilCurrentTime: Boolean = true;
  constructor(public service: Service ) {
    console.log("screen dimensions" , window.innerHeight , window.innerWidth);
    const screenRatio: any = (window.innerWidth / window.innerHeight);
    console.log(screenRatio);
    this.height =  (window.innerWidth / screenRatio) + "px";
    console.log("the height in pixels " , this.height);
    this.appointmentData = service.getAppointments();
    console.log(this.appointmentData);
  }
  ngOnInit() {
    
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.schedulerInstance = this.scheduler.instance;
    console.log("Hello World" , this.schedulerInstance);
    console.log(this.schedulerInstance.onCellClick);
  }
  onContentReady(e) {
    let currentHour = new Date().getHours() - 1;

    e.component.scrollToTime(currentHour, 30, new Date());
}

  onCellClick(e) {
    console.log(e);
  }
}
