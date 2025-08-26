import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectAngular } from './effect-angular';

describe('EffectAngular', () => {
  let component: EffectAngular;
  let fixture: ComponentFixture<EffectAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
