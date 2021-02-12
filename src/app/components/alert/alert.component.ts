import {AfterViewInit, Component, OnDestroy, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';
import { Alert } from '../../models/alert';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'alert-component',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less'],
})
export class AlertComponent implements OnInit, AfterViewInit, OnDestroy {
  sub = new Subscription();
  loading: boolean = false;
  @Input() alert: Alert = null;
  @Output() alertClick = new EventEmitter();

  constructor(
    public alertsService: AlertsService,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

  onAlertClick(): void {
    if(this.alertClick?.observers?.length && this.alertClick.observers.length > 0){
      this.alertClick.emit(this.alert);
    }
  }

  isAlertAboveUpperLimit(alertValue: string, upperLimit: string): boolean {
    if (parseFloat(alertValue) > parseFloat(upperLimit)) {
        return true
    }
    else {
        return false
    }
  }

  calculatePercentage(alertValue: string, upperLimit: string, lowerLimit: string): string {
    if (this.isAlertAboveUpperLimit(alertValue, upperLimit)) {
        return (((parseFloat(alertValue) / parseFloat(upperLimit)) - 1) * 100).toFixed(2)
    }
    else {
        return (((parseFloat(alertValue) / parseFloat(lowerLimit)) - 1) * -100).toFixed(2)
    }
  }

  removeDecimals (alertValue: string): string {
    return parseFloat(alertValue).toFixed(2).toString()
  }

  toDateTime (unixtime: string): string {
    const date = new Date(parseInt(unixtime))
    return date.toLocaleTimeString("pt-br")
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
