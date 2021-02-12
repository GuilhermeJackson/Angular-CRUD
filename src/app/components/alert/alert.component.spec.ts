import { AlertComponent } from './alert.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing'; // 1
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AlertsService } from '@modules/alerts/services/alerts.service';


describe('alert-component', () => {
        let component: AlertComponent;
        let fixture: ComponentFixture<AlertComponent>;
        let h1: HTMLElement;
        beforeEach(() => {
            TestBed.configureTestingModule({
              declarations: [ AlertComponent ],
              providers: [AlertsService]
            }).compileComponents();
            fixture = TestBed.createComponent(AlertComponent);
            component = fixture.componentInstance;
            h1 = fixture.nativeElement.querySelector(null);
            
          });
          

      
    //t('should create the app', () => { // 4
    //   const fixture = TestBed.createComponent(AlertComponent);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(h1).toBeTruthy();
    // });
    //
    // it(`should have as title 'angular-component-testing'`, () => {  //5
    //   const fixture = TestBed.createComponent(AlertComponent);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.title).toEqual('angular-component-testing');
    // });
    //
    // it('should render title in a h1 tag', () => { //6
    //   const fixture = TestBed.createComponent(AlertComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('title').textContent).toContain('#1 - alertone');
    // });

});