import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flowcontrol } from './flowcontrol';

describe('Flowcontrol', () => {
  let component: Flowcontrol;
  let fixture: ComponentFixture<Flowcontrol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flowcontrol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flowcontrol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
