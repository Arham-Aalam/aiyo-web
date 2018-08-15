import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsgoComponent } from './letsgo.component';

describe('LetsgoComponent', () => {
  let component: LetsgoComponent;
  let fixture: ComponentFixture<LetsgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
