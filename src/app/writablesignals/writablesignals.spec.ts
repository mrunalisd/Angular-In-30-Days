import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Writablesignals } from './writablesignals';

describe('Writablesignals', () => {
  let component: Writablesignals;
  let fixture: ComponentFixture<Writablesignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Writablesignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Writablesignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
