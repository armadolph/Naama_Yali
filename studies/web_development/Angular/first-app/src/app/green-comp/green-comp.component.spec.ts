import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCompComponent } from './green-comp.component';

describe('GreenCompComponent', () => {
  let component: GreenCompComponent;
  let fixture: ComponentFixture<GreenCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
